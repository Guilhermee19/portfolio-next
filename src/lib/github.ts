"use server"

import { Octokit } from "@octokit/core";

interface CommitData {
  month: string
  count: number
}

interface ContributionDay {
  date: string
  count: number
}

interface ProcessedContributions {
  totalCount: number
  contributions: ContributionDay[]
}

export async function getCommitsByMonth(username: string): Promise<CommitData[]> {
  try {
    const octokit = new Octokit()
    const today = new Date()
    const currentYear = today.getFullYear()
    const commitCounts: { [month: number]: number } = {}

    for (let month = 1; month <= 12; month++) {
      commitCounts[month] = 0
    }

    const { data: events } = await octokit.request("GET /users/{username}/events", {
      username: username,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })

    events.forEach((event) => {
      if (event.type === "PushEvent") {
        const commitDate = new Date(event.created_at as string)
        if (commitDate.getFullYear() === currentYear) {
          const month = commitDate.getMonth() + 1
          commitCounts[month] = (commitCounts[month] || 0) + (event.payload as any).commits.length
        }
      }
    })

    const commitData: CommitData[] = Object.entries(commitCounts).map(([month, count]) => ({
      month: month,
      count: count as number,
    }))

    return commitData
  } catch (error) {
    console.error("Erro ao buscar commits:", error)
    return []
  }
}

export async function fetchContributions(username: string, year: number): Promise<ProcessedContributions> {
  try {
    const octokit = new Octokit()

    // Inicializa o objeto de retorno
    const result: ProcessedContributions = {
      totalCount: 0,
      contributions: [],
    }

    // Define o período para buscar contribuições (um ano)
    const startDate = new Date(year, 0, 1)
    const endDate = new Date(year, 11, 31)

    // Limita a data final ao dia atual se for o ano atual
    const today = new Date()
    const finalEndDate = year === today.getFullYear() ? today : endDate

    // Formata as datas para o formato ISO (YYYY-MM-DD)
    const startDateStr = startDate.toISOString().split("T")[0]
    const endDateStr = finalEndDate.toISOString().split("T")[0]

    // Busca os repositórios do usuário
    const { data: repos } = await octokit.request("GET /users/{username}/repos", {
      username,
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })

    // Mapa para armazenar as contribuições por dia
    const contributionsByDay = new Map<string, number>()

    // Para cada repositório, busca os commits do usuário
    for (const repo of repos) {
      try {
        // Busca os commits do usuário no repositório
        const { data: commits } = await octokit.request("GET /repos/{owner}/{repo}/commits", {
          owner: repo.owner.login,
          repo: repo.name,
          author: username,
          since: startDateStr,
          until: endDateStr,
          per_page: 100,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        })

        // Processa cada commit
        for (const commit of commits) {
          if (commit.commit.author?.date) {
            const dateStr = commit.commit.author.date.split("T")[0]
            const count = contributionsByDay.get(dateStr) || 0
            contributionsByDay.set(dateStr, count + 1)
            result.totalCount++
          }
        }
      } catch (error) {
        console.error(`Erro ao buscar commits para ${repo.name}:`, error)
        // Continua para o próximo repositório
      }
    }

    // Converte o mapa para um array de objetos
    result.contributions = Array.from(contributionsByDay.entries()).map(([date, count]) => ({
      date,
      count,
    }))

    return result
  } catch (error) {
    console.error("Erro ao buscar contribuições:", error)
    throw new Error("Falha ao buscar dados de contribuições do GitHub")
  }
}

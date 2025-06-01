"use client";

import { useEffect, useState } from "react";
import { fetchContributions } from "@/lib/github";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ContributionGraphProps {
  username: string;
}

interface ContributionDay {
  date: string;
  count: number;
}

interface ProcessedContributions {
  totalCount: number;
  contributions: ContributionDay[];
}

export function ContributionGraph({ username }: ContributionGraphProps) {
  const [contributions, setContributions] =
    useState<ProcessedContributions | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );

  const years = Array.from({ length: 6 }, (_, i) =>
    (new Date().getFullYear() - 5 + i).toString()
  );

  useEffect(() => {
    const loadContributions = async () => {
      try {
        setLoading(true);
        const data = await fetchContributions(
          username,
          Number.parseInt(selectedYear)
        );
        setContributions(data);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar contribuições:", err);
        setError("Não foi possível carregar os dados de contribuições.");
      } finally {
        setLoading(false);
      }
    };

    loadContributions();
  }, [username, selectedYear]);

  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const weekdays = ["Seg", "Ter", "Qua", "Qui", "Sex"];

  // Função para determinar a cor do quadrado baseado no número de contribuições
  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-[#161b22]";
    if (count <= 3) return "bg-[#0e4429]";
    if (count <= 6) return "bg-[#006d32]";
    if (count <= 9) return "bg-[#26a641]";
    return "bg-[#39d353]";
  };

  // Função para formatar a data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Gera os dias para o calendário
  const generateCalendarDays = () => {
    if (!contributions) return [];

    const today = new Date();
    const endDate = new Date(Number.parseInt(selectedYear), 11, 31);
    const startDate = new Date(Number.parseInt(selectedYear), 0, 1);

    // Se o ano selecionado for o atual, ajusta a data final para hoje
    const finalEndDate =
      selectedYear === today.getFullYear().toString() ? today : endDate;

    // Cria um mapa de contribuições por data
    const contributionMap = new Map<string, number>();
    contributions.contributions.forEach((day) => {
      contributionMap.set(day.date.split("T")[0], day.count);
    });

    // Gera os dias do calendário
    const calendarDays = [];
    const currentDate = new Date(startDate);

    while (currentDate <= finalEndDate) {
      const dateString = currentDate.toISOString().split("T")[0];
      const count = contributionMap.get(dateString) || 0;

      calendarDays.push({
        date: dateString,
        count,
        dayOfWeek: currentDate.getDay(),
        month: currentDate.getMonth(),
      });

      // Avança para o próximo dia
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return calendarDays;
  };

  // Organiza os dias em semanas
  const organizeIntoWeeks = (days: any[]) => {
    const weeks: any[][] = [];
    let currentWeek: any[] = [];

    // Preenche os dias vazios no início da primeira semana
    const firstDay = days[0];
    if (firstDay) {
      // Ajusta para que domingo seja 0, segunda 1, etc.
      const dayOfWeek = firstDay.dayOfWeek === 0 ? 6 : firstDay.dayOfWeek - 1;

      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push(null);
      }
    }

    // Adiciona os dias às semanas
    days.forEach((day) => {
      // Ajusta para que domingo seja 0, segunda 1, etc.
      const dayOfWeek = day.dayOfWeek === 0 ? 6 : day.dayOfWeek - 1;

      // Se for domingo e já temos dias na semana atual, inicia uma nova semana
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }

      // Adiciona o dia à semana atual
      currentWeek.push(day);

      // Se for sábado, finaliza a semana
      if (dayOfWeek === 6) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    });

    // Adiciona a última semana se não estiver vazia
    if (currentWeek.length > 0) {
      weeks.push([...currentWeek]);
    }

    return weeks;
  };

  // Determina os meses a serem exibidos no cabeçalho
  const getMonthLabels = (days: any[]) => {
    if (days.length === 0) return [];

    const monthLabels = [];
    let currentMonth = -1;
    let currentMonthStartIndex = 0;

    days.forEach((day, index) => {
      if (day && day.month !== currentMonth) {
        if (currentMonth !== -1) {
          // Calcula a posição do mês anterior
          const width = index - currentMonthStartIndex;
          monthLabels.push({
            month: currentMonth,
            startIndex: currentMonthStartIndex,
            width,
          });
        }
        currentMonth = day.month;
        currentMonthStartIndex = index;
      }
    });

    // Adiciona o último mês
    if (currentMonth !== -1) {
      monthLabels.push({
        month: currentMonth,
        startIndex: currentMonthStartIndex,
        width: days.length - currentMonthStartIndex,
      });
    }

    return monthLabels;
  };

  const calendarDays = generateCalendarDays();
  const weeks = organizeIntoWeeks(calendarDays);
  const monthLabels = getMonthLabels(calendarDays);

  return (
    <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-normal text-white">
          {contributions
            ? `${contributions.totalCount} contribuições no último ano`
            : "Contribuições no último ano"}
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Contribution settings</span>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[100px] bg-[#0d1117] border-[#30363d] text-white">
              <SelectValue placeholder={selectedYear} />
            </SelectTrigger>
            <SelectContent className="bg-[#161b22] border-[#30363d] text-white">
              {years.map((year) => (
                <SelectItem
                  key={year}
                  value={year}
                  className="hover:bg-[#30363d]"
                >
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <Skeleton className="h-[160px] w-full bg-[#161b22]" />
      ) : error ? (
        <div className="text-red-500 p-4 text-center">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Cabeçalho dos meses */}
            <div className="flex mb-2 pl-10">
              {monthLabels.map((label, index) => (
                <div
                  key={index}
                  className="text-xs text-gray-400"
                  style={{
                    width: `${(label.width / calendarDays.length) * 100}%`,
                    marginLeft:
                      index === 0
                        ? `${(label.startIndex / calendarDays.length) * 100}%`
                        : 0,
                  }}
                >
                  {months[label.month]}
                </div>
              ))}
            </div>

            <div className="flex">
              {/* Dias da semana */}
              <div className="flex flex-col mr-2 pt-2">
                {weekdays.map((day, index) => (
                  <div
                    key={index}
                    className="h-[10px] text-xs text-gray-400 mb-[5px]"
                  >
                    {index === 0 || index === 2 || index === 4 ? day : ""}
                  </div>
                ))}
              </div>

              {/* Grade de contribuições */}
              <div className="flex-1">
                <div className="grid grid-flow-col gap-[2px]">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[2px]">
                      {Array.from({ length: 5 }).map((_, dayIndex) => {
                        const day = week[dayIndex];
                        return (
                          <TooltipProvider key={dayIndex}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div
                                  className={cn(
                                    "w-[10px] h-[10px] rounded-sm",
                                    day
                                      ? getContributionColor(day.count)
                                      : "bg-[#161b22]"
                                  )}
                                />
                              </TooltipTrigger>
                              {day && (
                                <TooltipContent className="bg-[#161b22] border-[#30363d] text-white">
                                  <div>
                                    <strong>
                                      {day.count}{" "}
                                      {day.count === 1
                                        ? "contribuição"
                                        : "contribuições"}
                                    </strong>{" "}
                                    em {formatDate(day.date)}
                                  </div>
                                </TooltipContent>
                              )}
                            </Tooltip>
                          </TooltipProvider>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legenda */}
            <div className="flex justify-end items-center mt-4 text-xs text-gray-400">
              <span className="mr-2">Less</span>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#161b22] mr-1"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#0e4429] mr-1"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#006d32] mr-1"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#26a641] mr-1"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#39d353] mr-1"></div>
              <span>More</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  BarChart2,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
} from "lucide-react";

// Sample data
const callData = [
  { name: "Mon", calls: 150, answered: 120, converted: 45 },
  { name: "Tue", calls: 230, answered: 190, converted: 78 },
  { name: "Wed", calls: 280, answered: 220, converted: 95 },
  { name: "Thu", calls: 300, answered: 250, converted: 105 },
  { name: "Fri", calls: 340, answered: 280, converted: 120 },
  { name: "Sat", calls: 180, answered: 140, converted: 60 },
  { name: "Sun", calls: 120, answered: 90, converted: 35 },
];

const callOutcomeData = [
  { name: "Converted", value: 538 },
  { name: "Interested", value: 312 },
  { name: "Not Interested", value: 256 },
  { name: "No Answer", value: 190 },
  { name: "Callback", value: 104 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

export function Analytics() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="analytics" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful Analytics
          </h2>
          <p className="text-xl text-muted-foreground">
            Track performance metrics and gain insights to optimize your AI call
            campaigns.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-black/20 backdrop-blur-sm border border-white/10">
                <TabsTrigger
                  value="overview"
                  onClick={() => setActiveTab("overview")}
                  className="data-[state=active]:bg-primary/20"
                >
                  <LineChartIcon className="h-4 w-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="calls"
                  onClick={() => setActiveTab("calls")}
                  className="data-[state=active]:bg-primary/20"
                >
                  <BarChart2 className="h-4 w-4 mr-2" />
                  Call Metrics
                </TabsTrigger>
                <TabsTrigger
                  value="outcomes"
                  onClick={() => setActiveTab("outcomes")}
                  className="data-[state=active]:bg-primary/20"
                >
                  <PieChartIcon className="h-4 w-4 mr-2" />
                  Outcomes
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6">
              <TabsContent value="overview" className="mt-0">
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-black/40 border-white/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          Total Calls
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1,600</div>
                        <p className="text-xs text-muted-foreground mt-1">
                          <span className="text-green-400">↑ 12.5%</span> from
                          last week
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-black/40 border-white/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          Conversion Rate
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">33.6%</div>
                        <p className="text-xs text-muted-foreground mt-1">
                          <span className="text-green-400">↑ 3.2%</span> from
                          last week
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-black/40 border-white/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          Avg. Call Duration
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3m 42s</div>
                        <p className="text-xs text-muted-foreground mt-1">
                          <span className="text-green-400">↑ 0.5%</span> from
                          last week
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-black/40 p-6">
                    <h3 className="text-lg font-medium mb-4">
                      Weekly Performance
                    </h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={callData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="rgba(255,255,255,0.1)"
                          />
                          <XAxis
                            dataKey="name"
                            stroke="rgba(255,255,255,0.5)"
                          />
                          <YAxis stroke="rgba(255,255,255,0.5)" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "rgba(0,0,0,0.8)",
                              border: "1px solid rgba(255,255,255,0.2)",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="calls"
                            stroke="hsl(var(--chart-1))"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="answered"
                            stroke="hsl(var(--chart-2))"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="converted"
                            stroke="hsl(var(--chart-3))"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center mt-4 space-x-6">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-1))] mr-2"></div>
                        <span className="text-sm text-muted-foreground">
                          Total Calls
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-2))] mr-2"></div>
                        <span className="text-sm text-muted-foreground">
                          Answered
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-3))] mr-2"></div>
                        <span className="text-sm text-muted-foreground">
                          Converted
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="calls" className="mt-0">
                <motion.div
                  key="calls"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-xl border border-white/10 bg-black/40 p-6">
                    <h3 className="text-lg font-medium mb-4">
                      Call Volume by Day
                    </h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={callData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="rgba(255,255,255,0.1)"
                          />
                          <XAxis
                            dataKey="name"
                            stroke="rgba(255,255,255,0.5)"
                          />
                          <YAxis stroke="rgba(255,255,255,0.5)" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "rgba(0,0,0,0.8)",
                              border: "1px solid rgba(255,255,255,0.2)",
                            }}
                          />
                          <Bar dataKey="calls" fill="hsl(var(--chart-1))" />
                          <Bar dataKey="answered" fill="hsl(var(--chart-2))" />
                          <Bar dataKey="converted" fill="hsl(var(--chart-3))" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center mt-4 space-x-6">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-1))] mr-2"></div>
                        <span className="text-sm text-muted-foreground">
                          Total Calls
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-2))] mr-2"></div>
                        <span className="text-sm text-muted-foreground">
                          Answered
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-3))] mr-2"></div>
                        <span className="text-sm text-muted-foreground">
                          Converted
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <Card className="bg-black/40 border-white/10">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Best Performing Hours
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { time: "10:00 - 12:00", rate: "42%", calls: 320 },
                            { time: "14:00 - 16:00", rate: "38%", calls: 280 },
                            { time: "16:00 - 18:00", rate: "35%", calls: 240 },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between"
                            >
                              <div>
                                <div className="font-medium">{item.time}</div>
                                <div className="text-sm text-muted-foreground">
                                  {item.calls} calls
                                </div>
                              </div>
                              <div className="text-lg font-bold text-green-400">
                                {item.rate}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/40 border-white/10">
                      <CardHeader>
                        <CardTitle className="text-lg">Call Duration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            {
                              duration: "< 1 minute",
                              percentage: "15%",
                              color: "bg-red-500",
                            },
                            {
                              duration: "1-3 minutes",
                              percentage: "35%",
                              color: "bg-yellow-500",
                            },
                            {
                              duration: "3-5 minutes",
                              percentage: "40%",
                              color: "bg-green-500",
                            },
                            {
                              duration: "> 5 minutes",
                              percentage: "10%",
                              color: "bg-blue-500",
                            },
                          ].map((item, i) => (
                            <div key={i}>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">
                                  {item.duration}
                                </span>
                                <span className="text-sm font-medium">
                                  {item.percentage}
                                </span>
                              </div>
                              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${item.color}`}
                                  style={{ width: item.percentage }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="outcomes" className="mt-0">
                <motion.div
                  key="outcomes"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl border border-white/10 bg-black/40 p-6">
                      <h3 className="text-lg font-medium mb-4">
                        Call Outcomes
                      </h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={callOutcomeData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }) =>
                                `${name}: ${(percent * 100).toFixed(0)}%`
                              }
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {callOutcomeData.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS[index % COLORS.length]}
                                />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "rgba(0,0,0,0.8)",
                                border: "1px solid rgba(255,255,255,0.2)",
                              }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div>
                      <Card className="bg-black/40 border-white/10 mb-6">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            Conversion by Industry
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {[
                              {
                                industry: "E-commerce",
                                rate: "45%",
                                color: "bg-indigo-500",
                              },
                              {
                                industry: "Finance",
                                rate: "38%",
                                color: "bg-purple-500",
                              },
                              {
                                industry: "Healthcare",
                                rate: "32%",
                                color: "bg-blue-500",
                              },
                              {
                                industry: "Education",
                                rate: "28%",
                                color: "bg-cyan-500",
                              },
                              {
                                industry: "Real Estate",
                                rate: "25%",
                                color: "bg-teal-500",
                              },
                            ].map((item, i) => (
                              <div key={i}>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm font-medium">
                                    {item.industry}
                                  </span>
                                  <span className="text-sm font-medium">
                                    {item.rate}
                                  </span>
                                </div>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full ${item.color}`}
                                    style={{ width: item.rate }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-black/40 border-white/10">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            Lead Quality
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block text-indigo-500">
                                  Excellent
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-indigo-500">
                                  72%
                                </span>
                              </div>
                            </div>
                            <div className="flex h-2 mb-4 overflow-hidden text-xs bg-white/10 rounded-full">
                              <div
                                style={{ width: "72%" }}
                                className="flex flex-col justify-center text-center text-white bg-indigo-500"
                              ></div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Based on follow-up engagement and conversion to
                              paid customers.
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Background glow effects */}
              <div className="absolute -z-10 top-1/3 left-0 right-0 mx-auto w-3/4 h-16 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/3 left-0 right-0 mx-auto w-1/2 h-16 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 blur-3xl"></div>
            </div>
          </Tabs>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}


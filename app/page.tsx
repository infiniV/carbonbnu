"use client"

import { Bar, BarChart, Line, LineChart, XAxis, YAxis, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function CarbonBNUVisualizer() {
  // Scope 2 Data
  const scope2Data = [
    { block: "SLASS Block", gridEmissions: 12642.14, solarOffset: 38302.82, netEmissions: -25660.68 },
    { block: "SVAD + BBA", gridEmissions: 23267.72, solarOffset: 70495.92, netEmissions: -47228.2 },
    { block: "Hostels", gridEmissions: 11100.8, solarOffset: 33632.9, netEmissions: -22532.1 },
    { block: "Center Block", gridEmissions: 11032.63, solarOffset: 33426.36, netEmissions: -22393.73 },
    { block: "SLASS Block 2", gridEmissions: 21076.71, solarOffset: 63857.66, netEmissions: -42780.95 },
  ]

  // Scope 1 Data
  const scope1Data = [
    { month: "Jan 2025", emissions: 11095.2 },
    { month: "Feb 2025", emissions: 18163.84 },
    { month: "Mar 2025", emissions: 10591.68 },
    { month: "Apr 2025", emissions: 8953.56 },
    { month: "May 2025", emissions: 9837.25 },
    { month: "Jun 2025", emissions: 10552.48 },
  ]

  // Scope 3 Data
  const scope3Data = [
    { block: "SVAD", electricityUse: 862097.12, emissions: 370701.76 },
    { block: "RHSA", electricityUse: 99993.12, emissions: 42997.04 },
    { block: "SLASS", electricityUse: 500, emissions: 215 },
    { block: "SCIT", electricityUse: 339170.0, emissions: 145843.1 },
    { block: "BBA", electricityUse: 152305.0, emissions: 65491.15 },
    { block: "Boys Hostel", electricityUse: 107450.0, emissions: 46203.5 },
  ]

  // Calculate totals
  const totalScope2NetEmissions = scope2Data.reduce((sum, item) => sum + item.netEmissions, 0)
  const totalScope1Emissions = scope1Data.reduce((sum, item) => sum + item.emissions, 0)
  const totalScope3Emissions = 671451.55

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6 tracking-tight">
                Carbon<span className="text-gray-400">BNU</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive carbon emissions visualization and monitoring system for Beaconhouse National University
              </p>
              <div className="flex gap-4">
                <Badge variant="outline" className="text-white border-white">
                  Real-time Monitoring
                </Badge>
                <Badge variant="outline" className="text-white border-white">
                  Scope 1, 2 & 3 Tracking
                </Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.580035194876!2d74.21348101172664!3d31.364969974178265!2m3!1f0!2f3!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391855549698f6f7%3A0x4ffb44644f967144!2sBeaconhouse%20National%20University%20(BNU)!5e1!3m2!1sen!2s!4v1748977707563!5m2!1sen!2s"
                  width="500"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Emissions Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-black">
              <CardHeader className="bg-black text-white">
                <CardTitle className="text-3xl font-extrabold">1</CardTitle>
                <CardDescription className="text-gray-200">Direct emissions from diesel generators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">{totalScope1Emissions.toLocaleString()} kg CO₂</div>
                <p className="text-sm text-gray-600 mt-2">Jan-Jun 2025</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-black text-white py-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-black"></div>
                <CardTitle className="text-3xl font-extrabold relative z-10">2</CardTitle>
                <CardDescription className="text-gray-200 relative z-10">
                  Indirect emissions from electricity
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 bg-white border-t-2 border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {Math.abs(totalScope2NetEmissions).toLocaleString()} kg CO₂
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">Net offset (negative)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader className="bg-black text-white">
                <CardTitle className="text-3xl font-extrabold">3</CardTitle>
                <CardDescription className="text-gray-200">Other indirect emissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600">
                  {totalScope3Emissions.toLocaleString()} kg CO₂e
                </div>
                <p className="text-sm text-gray-600 mt-2">Annual electricity use</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scope 2 Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Scope 2: Electricity Emissions</h2>
          <p className="text-lg text-gray-600 mb-8">
            Grid emissions vs solar offset showing net carbon impact by building block
          </p>

          <Card className="border-2 border-black w-full">
            <CardHeader>
              <CardTitle>Grid Emissions vs Solar Offset</CardTitle>
              <CardDescription>Positive values show emissions, negative values show carbon offset</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <ChartContainer
                config={{
                  gridEmissions: {
                    label: "Grid Emissions",
                    color: "#000000",
                  },
                  solarOffset: {
                    label: "Solar Offset",
                    color: "#666666",
                  },
                  netEmissions: {
                    label: "Net Emissions",
                    color: "#333333",
                  },
                }}
                className="h-[400px] w-full"
              >
                <BarChart data={scope2Data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }} width="100%">
                  <XAxis dataKey="block" angle={-45} textAnchor="end" height={80} interval={0} />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="gridEmissions" fill="var(--color-gridEmissions)" name="Grid Emissions" />
                  <Bar dataKey="solarOffset" fill="var(--color-solarOffset)" name="Solar Offset" />
                  <Bar dataKey="netEmissions" fill="var(--color-netEmissions)" name="Net Emissions" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Scope 1 Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Scope 1: Direct Emissions</h2>
          <p className="text-lg text-gray-600 mb-8">Monthly diesel generator usage and CO₂ emissions trend</p>

          <Card className="border-2 border-black w-full">
            <CardHeader>
              <CardTitle>Monthly Diesel Generator Emissions</CardTitle>
              <CardDescription>CO₂ emissions from diesel generators (kg)</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <ChartContainer
                config={{
                  emissions: {
                    label: "CO₂ Emissions (kg)",
                    color: "#000000",
                  },
                }}
                className="h-[300px] w-full"
              >
                <LineChart data={scope1Data} width="100%">
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="emissions"
                    stroke="var(--color-emissions)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-emissions)", strokeWidth: 2, r: 6 }}
                    name="CO₂ Emissions"
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Scope 3 Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Scope 3: Indirect Emissions</h2>
          <p className="text-lg text-gray-600 mb-8">
            Electricity consumption and associated emissions by building block
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle>Electricity Usage by Block</CardTitle>
                <CardDescription>Annual electricity consumption (kWh)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    electricityUse: {
                      label: "Electricity Use (kWh)",
                      color: "#000000",
                    },
                  }}
                  className="h-[300px]"
                >
                  <BarChart data={scope3Data} layout="vertical">
                    <XAxis type="number" />
                    <YAxis dataKey="block" type="category" width={80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="electricityUse" fill="var(--color-electricityUse)" name="Electricity Use (kWh)" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle>Emissions by Block</CardTitle>
                <CardDescription>Annual emissions (kg CO₂e)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    emissions: {
                      label: "Emissions (kg CO₂e)",
                      color: "#333333",
                    },
                  }}
                  className="h-[300px]"
                >
                  <BarChart data={scope3Data} layout="vertical">
                    <XAxis type="number" />
                    <YAxis dataKey="block" type="category" width={80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="emissions" fill="var(--color-emissions)" name="Emissions (kg CO₂e)" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Additional Scope 3 Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle>Total Electricity Consumption</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,561,515.24 kWh/year</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle>Waste Generated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">230.97 kg/year</div>
                <p className="text-sm text-gray-600 mt-2">Scope 3 Category 5</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">CarbonBNU</h3>
          <p className="text-gray-400 mb-4">
            Monitoring and visualizing carbon emissions across Beaconhouse National University
          </p>
          <p className="text-sm text-gray-500">Data updated regularly • Scope 1, 2 & 3 emissions tracking</p>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { AlertTriangle, FileText, BadgeDollarSign, AlertCircle, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Analytics() {
  const recentDeposits = [
    {
      type: "Security Deposit",
      contract: "SC-2023-001",
      status: "completed",
      amount: 5000.0,
      date: "2023-12-20",
    },
    {
      type: "Escrow Payment",
      contract: "SC-2023-002",
      status: "pending",
      amount: 12500.0,
      date: "2023-12-18",
    },
    {
      type: "Performance Bond",
      contract: "SC-2023-003",
      status: "completed",
      amount: 7800.0,
      date: "2023-12-18",
    },
    {
      type: "Security Deposit",
      contract: "SC-2023-004",
      status: "completed",
      amount: 3200.0,
      date: "2023-12-17",
    },
    {
      type: "Escrow Payment",
      contract: "SC-2023-005",
      status: "pending",
      amount: 9400.0,
      date: "2023-12-16",
    },
  ]

  const contractStatus = [
    {
      id: "SC-2023-001",
      type: "Security Deposit Contract",
      status: "Active",
      amount: 5000.0,
    },
    {
      id: "SC-2023-002",
      type: "Escrow Agreement",
      status: "Active",
      amount: 12500.0,
    },
    {
      id: "SC-2023-003",
      type: "Performance Bond",
      status: "Warning",
      amount: 7800.0,
    },
    {
      id: "SC-2023-004",
      type: "Security Deposit Contract",
      status: "Active",
      amount: 3200.0,
    },
  ]

  return (
    <div className="w-full max-w-[1600px] mx-auto p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <div className="flex items-center space-x-4"></div>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="deposits">Deposits</TabsTrigger>
          <TabsTrigger value="contracts">Contracts</TabsTrigger>
        </TabsList>

        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Deposits</CardTitle>
              <BadgeDollarSign className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+$20.1k from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Contracts</CardTitle>
              <FileText className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">4 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Verifications</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Disputes</CardTitle>
              <AlertTriangle className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">1 critical case</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Deposits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentDeposits.map((deposit, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg bg-background gap-2 sm:gap-4"
                >
                  <div className="w-[70%] sm:w-auto">
                    <p className="font-medium">{deposit.type}</p>
                    <p className="text-sm text-muted-foreground">Contract #{deposit.contract}</p>
                  </div>
                  <Badge
                    variant={deposit.status === "completed" ? "default" : "secondary"}
                    className={deposit.status === "completed" ? "bg-black text-white" : "bg-gray-200 text-gray-700"}
                  >
                    {deposit.status}
                  </Badge>
                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <p className="font-medium">${deposit.amount.toLocaleString()}</p>
                    <p className="text-[12px]">{deposit.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Smart Contract Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contractStatus.map((contract, i) => (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg bg-background gap-2 sm:gap-4 ${
                    contract.status === "Warning" ? "border-destructive" : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <AlertCircle
                      className={`w-4 h-4 ${contract.status === "Warning" ? "text-red-500" : "text-muted-foreground"}`}
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium">Contract #{contract.id}</p>
                        {contract.status === "Active" && (
                          <Badge variant="secondary" className="bg-white text-black">
                            Active
                          </Badge>
                        )}
                      </div>
                      <p
                        className={`text-sm ${contract.status === "Warning" ? "text-red-600" : "text-muted-foreground"}`}
                      >
                        {contract.type}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${contract.status === "Warning" ? "text-red-600" : ""}`}>
                      ${contract.amount.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </div>
  )
}
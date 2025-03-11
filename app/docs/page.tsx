"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocsPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="space-y-8">
                <div className="space-y-2">
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">CoconutSplit Bot Commands</h1>
                    <p className="text-lg text-muted-foreground">
                        Welcome to CoconutSplit! Here are all the commands you can use with our bot:
                    </p>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Command</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-mono">/start</TableCell>
                            <TableCell>Start using the bot and get a welcome message</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">/help</TableCell>
                            <TableCell>Get help and see all available commands</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">/create_group</TableCell>
                            <TableCell>Create a new expense splitting group</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">/delete_group</TableCell>
                            <TableCell>Delete your current group (admin only)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">/leave_group</TableCell>
                            <TableCell>Leave your current group</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">/view_users</TableCell>
                            <TableCell>See all members in your current group</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">/add_expense</TableCell>
                            <TableCell>Add a new expense to split with the group</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">/show_expenses</TableCell>
                            <TableCell>View all expenses in the current group</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">/show_debts</TableCell>
                            <TableCell>See who owes what to whom</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">/upload_receipt</TableCell>
                            <TableCell>Upload a receipt image for automatic expense parsing</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">/settle_debt</TableCell>
                            <TableCell>Mark a debt as settled between users</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">/show_settlements</TableCell>
                            <TableCell>View all completed settlements in the group</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Card>
                    <CardHeader>
                        <CardTitle>Getting Started</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="leading-7">
                            1. Start by using the <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">/start</code> command to initialize the bot
                        </p>
                        <p className="leading-7">
                            2. Create a new group with <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">/create_group</code> or join an existing one
                        </p>
                        <p className="leading-7">
                            3. Add expenses using <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">/add_expense</code> or upload receipts with <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">/upload_receipt</code>
                        </p>
                        <p className="leading-7">
                            4. Track debts with <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">/show_debts</code> and settle them using <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">/settle_debt</code>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

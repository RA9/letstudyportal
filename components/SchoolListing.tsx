"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronDown, ChevronUp } from 'lucide-react'

type School = {
  id: number
  name: string
  country: string
  location: string
  createdBy: string
  status: "Pending" | "Approved" | "Active" | "Inactive"
}

const schools: School[] = [
  { id: 1, name: "Greenwood High", country: "USA", location: "New York", createdBy: "John Doe", status: "Active" },
  { id: 2, name: "Sunnyvale Elementary", country: "Canada", location: "Toronto", createdBy: "Jane Smith", status: "Pending" },
  { id: 3, name: "Oakridge International", country: "UK", location: "London", createdBy: "Alice Johnson", status: "Approved" },
  { id: 4, name: "Maple Leaf Academy", country: "Canada", location: "Vancouver", createdBy: "Bob Wilson", status: "Inactive" },
  { id: 5, name: "Riverside School", country: "Australia", location: "Sydney", createdBy: "Emma Brown", status: "Active" },
  // Add more schools as needed...
]

export function SchoolList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState<keyof School>("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const itemsPerPage = 5

  const filteredSchools = schools.filter((school) =>
    Object.values(school).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const sortedSchools = [...filteredSchools].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const paginatedSchools = sortedSchools.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredSchools.length / itemsPerPage)

  const handleSort = (column: keyof School) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const renderSortIcon = (column: keyof School) => {
    if (column === sortColumn) {
      return sortDirection === "asc" ? <ChevronUp className="inline w-4 h-4" /> : <ChevronDown className="inline w-4 h-4" />
    }
    return null
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Search className="w-5 h-5 text-gray-500" />
        <Input
          type="text"
          placeholder="Search schools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                School Name {renderSortIcon("name")}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("country")}>
                Country {renderSortIcon("country")}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("location")}>
                Location {renderSortIcon("location")}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("createdBy")}>
                Created By {renderSortIcon("createdBy")}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                Status {renderSortIcon("status")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedSchools.map((school) => (
              <TableRow key={school.id}>
                <TableCell className="font-medium">{school.name}</TableCell>
                <TableCell>{school.country}</TableCell>
                <TableCell>{school.location}</TableCell>
                <TableCell>{school.createdBy}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      school.status === "Active"
                        ? "success"
                        : school.status === "Pending"
                        ? "warning"
                        : school.status === "Approved"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {school.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={currentPage === 1 ? "disabled" : ""}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
              <PaginationLink
               key={index}
                onClick={() => setCurrentPage(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={currentPage === totalPages ? "disabled" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}


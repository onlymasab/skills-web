"use client";
import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "@/components/navar";

// Dummy Data
const mockData = [
  { id: 1, status: "Active", date: "2024-08-01", lectureUrl: "https://example.com/lecture/1" },
  { id: 2, status: "Inactive", date: "2024-08-02", lectureUrl: "https://example.com/lecture/2" },
  { id: 3, status: "Active", date: "2024-08-03", lectureUrl: "https://example.com/lecture/3" },
  { id: 4, status: "Inactive", date: "2024-08-04", lectureUrl: "https://example.com/lecture/4" },
  { id: 5, status: "Active", date: "2024-08-05", lectureUrl: "https://example.com/lecture/5" },
  { id: 6, status: "Inactive", date: "2024-08-06", lectureUrl: "https://example.com/lecture/6" },
  { id: 7, status: "Active", date: "2024-08-07", lectureUrl: "https://example.com/lecture/7" },
  { id: 8, status: "Inactive", date: "2024-08-08", lectureUrl: "https://example.com/lecture/8" },
  { id: 9, status: "Active", date: "2024-08-09", lectureUrl: "https://example.com/lecture/9" },
  { id: 10, status: "Inactive", date: "2024-08-10", lectureUrl: "https://example.com/lecture/10" },
  { id: 11, status: "Active", date: "2024-08-11", lectureUrl: "https://example.com/lecture/11" },
  { id: 12, status: "Inactive", date: "2024-08-12", lectureUrl: "https://example.com/lecture/12" },
  { id: 13, status: "Active", date: "2024-08-13", lectureUrl: "https://example.com/lecture/13" },
  { id: 14, status: "Inactive", date: "2024-08-14", lectureUrl: "https://example.com/lecture/14" },
  { id: 15, status: "Active", date: "2024-08-15", lectureUrl: "https://example.com/lecture/15" },
  { id: 16, status: "Inactive", date: "2024-08-16", lectureUrl: "https://example.com/lecture/16" },
  { id: 17, status: "Active", date: "2024-08-17", lectureUrl: "https://example.com/lecture/17" },
  { id: 18, status: "Inactive", date: "2024-08-18", lectureUrl: "https://example.com/lecture/18" },
  { id: 19, status: "Active", date: "2024-08-19", lectureUrl: "https://example.com/lecture/19" },
  { id: 20, status: "Inactive", date: "2024-08-20", lectureUrl: "https://example.com/lecture/20" },
  { id: 21, status: "Active", date: "2024-08-21", lectureUrl: "https://example.com/lecture/21" },
  { id: 22, status: "Inactive", date: "2024-08-22", lectureUrl: "https://example.com/lecture/22" },
  { id: 23, status: "Active", date: "2024-08-23", lectureUrl: "https://example.com/lecture/23" },
  { id: 24, status: "Inactive", date: "2024-08-24", lectureUrl: "https://example.com/lecture/24" },
];

export default function MyTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedSearchTerm, setAppliedSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  // Filter data based on the applied search term
  const filteredData = useMemo(() => {
    const term = appliedSearchTerm.toLowerCase(); // Convert search term to lowercase
    return mockData.filter(
      (item) =>
        item.status.toLowerCase().includes(term) ||
        item.date.includes(term) ||
        item.lectureUrl.toLowerCase().includes(term)
    );
  }, [appliedSearchTerm]); // Make sure this depends on 'appliedSearchTerm'

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div>
      <Navbar/>
    <div id="#3D-Art" className="container rounded-lg border mt-20 flex flex-col">
      {/* Search input and button */}
      <div className="mb-4 flex justify-between flex-col md:flex-row items-center">
        <h1 className="text-purple-700 font-semibold m-3 pt-4">App Development Tutorial</h1>
        <div className="pt-4 flex md:block">
          <input
            type="text"
            placeholder="Search by status, date, or lecture URL..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-purple-500 rounded"
          />
          <button
            onClick={() => {
              setAppliedSearchTerm(searchTerm.trim());
              setCurrentPage(1); // Reset to the first page on new search
            }}
            className="ml-2 px-4 py-2 bg-purple-500 text-white rounded"
          >
            Search
          </button>
        </div>
      </div>

      {/* Table */}
      <Table className="min-w-full border-collapse border">
        <TableHeader className="bg-purple-300 shadow-md">
          <TableRow className="text-black text-sm">
            <TableHead className="px-4 py-2 text-left text-black">ID</TableHead>
            <TableHead className="px-4 py-2 text-left text-black">Status</TableHead>
            <TableHead className="px-4 py-2 text-left text-black">Date</TableHead>
            <TableHead className="px-4 py-2 text-left text-black">Lecture URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <TableRow key={item.id} className="border-b">
                <TableCell className="px-4 py-2">{item.id}</TableCell>
                <TableCell className="px-4 py-2">{item.status}</TableCell>
                <TableCell className="px-4 py-2">{item.date}</TableCell>
                <TableCell className="px-4 py-2">
                  <a
                    href={item.lectureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {item.lectureUrl}
                  </a>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">
                No results found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 mb-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="sm:px-4 px-2 py-1 sm:py-2 border rounded-lg border-purple-500"
        >
          Previous
        </button>
        <span className="mx-2 px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 sm:py-2 border border-purple-500 rounded-lg sm:px-8"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
}

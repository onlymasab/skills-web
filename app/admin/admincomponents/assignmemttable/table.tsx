"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Chip } from "../chip/chip";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Define the data structure and initial data
export type Assignment = {
  id: string;
  link: string;
  uploadTime: string;
  status: "checked" | "unchecked";
};

const initialData: Assignment[] = [
  {
    id: "1",
    link: "https://example.com/assignment1",
    uploadTime: "",
    status: "unchecked",
  },
  {
    id: "2",
    link: "https://github.com/assignment1",
    uploadTime: "",
    status: "checked",
  },
];

export function AssignmentTable() {
  const [data, setData] = useState<Assignment[]>(initialData);
  const [link, setLink] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setData((prevData) =>
      prevData.map((assignment) => ({
        ...assignment,
        uploadTime: assignment.uploadTime || new Date().toLocaleString(),
      }))
    );
  }, []);

  const handleAddAssignment = () => {
    if (link) {
      setData([
        ...data,
        {
          id: String(data.length + 1),
          link,
          uploadTime: new Date().toLocaleString(),
          status: "unchecked",
        },
      ]);
      setLink("");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleStatusChange = (id: string) => {
    setData(
      data.map((assignment) =>
        assignment.id === id
          ? { ...assignment, status: assignment.status === "unchecked" ? "checked" : "unchecked" }
          : assignment
      )
    );
  };

  return (
    <div className="w-full px-8 py-12 bg-gray-900">
      <div className="py-4">
        <Input
          placeholder="Add assignment link..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="max-w-sm"
        />
        <Button onClick={handleAddAssignment} className="ml-4 my-4 bg-gray-700">
          Add Assignment
        </Button>
        {showAlert && (
          <div className="mt-4 text-green-600 py-4">
            Assignment uploaded successfully!
          </div>
        )}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-950 text-white">
            <TableRow>
              <TableHead className="text-white">Link</TableHead>
              <TableHead className="text-white">Upload Time</TableHead>
              <TableHead className="text-white">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length ? (
              data.map((assignment) => (
                <TableRow key={assignment.id} className="text-white">
                  <TableCell className="text-white">
                    <a href={assignment.link} target="_blank" rel="noopener noreferrer">
                      {assignment.link}
                    </a>
                  </TableCell>
                  <TableCell className="text-white">{assignment.uploadTime}</TableCell>
                  <TableCell className="text-white">
                    <Chip
                      variant={assignment.status === "checked" ? "success" : "default"}
                      onClick={() => handleStatusChange(assignment.id)}
                    >
                      {assignment.status}
                    </Chip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-white">
                  No assignments found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
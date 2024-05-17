"use client";
import Link from "next/link";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardDescription,
} from "@/components/ui/card";
import SidBar from "./SidBar";
import { Button } from "@/components/ui/button";

import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";

export default function Stats() {
  return (
    <div className='flex-1 grid grid-cols-[240px_1fr] overflow-hidden'>
      <div className='bg-gray-100 dark:bg-gray-800 p-6 overflow-y-auto'>
        <SidBar />
      </div>
      <div className='p-8 overflow-y-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <Card>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle>Occupancy Rate</CardTitle>
              <BarChartIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-4xl font-bold'>82%</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                +5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle>Revenue</CardTitle>
              <DollarSignIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-4xl font-bold'>$125,234</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle>Rooms</CardTitle>
              <HotelIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-4xl font-bold'>120</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                +3 new rooms this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle>Bookings</CardTitle>
              <BookIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-4xl font-bold'>1,234</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                +8% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='py-8'>
          <div className='flex items-center gap-4'>
            <h1 className='font-semibold text-lg md:text-xl'>Room Analytics</h1>
          </div>
          <div className='grid gap-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <Card className='flex flex-col'>
                <CardHeader>
                  <CardDescription>Room Occupancy</CardDescription>
                  <CardTitle>Occupancy Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart className='aspect-[4/3]' />
                </CardContent>
              </Card>
              <Card className='flex flex-col'>
                <CardHeader>
                  <CardDescription>Room Revenue</CardDescription>
                  <CardTitle>Revenue by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart className='aspect-[4/3]' />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <line x1='12' x2='12' y1='20' y2='10' />
      <line x1='18' x2='18' y1='20' y2='4' />
      <line x1='6' x2='6' y1='20' y2='16' />
    </svg>
  );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
    </svg>
  );
}

function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <line x1='12' x2='12' y1='2' y2='22' />
      <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
    </svg>
  );
}

function HotelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M10 22v-6.57' />
      <path d='M12 11h.01' />
      <path d='M12 7h.01' />
      <path d='M14 15.43V22' />
      <path d='M15 16a5 5 0 0 0-6 0' />
      <path d='M16 11h.01' />
      <path d='M16 7h.01' />
      <path d='M8 11h.01' />
      <path d='M8 7h.01' />
      <rect x='4' y='2' width='16' height='20' rx='2' />
    </svg>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy='name'
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role='application'
        ariaLabel='A bar chart showing data'
      />
    </div>
  );
}

function CalendarClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5' />
      <path d='M16 2v4' />
      <path d='M8 2v4' />
      <path d='M3 10h5' />
      <path d='M17.5 17.5 16 16.3V14' />
      <circle cx='16' cy='16' r='6' />
    </svg>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role='application'
      />
    </div>
  );
}

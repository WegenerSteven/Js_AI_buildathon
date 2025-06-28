import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import * as os from "os";
import { isErrored } from "stream";
import { z } from "zod";

// Create server instance
const server = new McpServer({
  name: "node_os_mcp",
  description: "A Server that provides tools to get information about the operating system.",
  version: "1.0.0",
});

// Define a tool to get system information
server.tool(
  "cpu_average_usage",
  "Get the average CPU usage percentage on the local machine",
  {},
  async () => {
    // Calculate average CPU usage over 100ms
    function cpuAverage() {
      const cpus = os.cpus();
      let totalIdle = 0, totalTick = 0;

      for (const cpu of cpus) {
        for (const type in cpu.times) {
          totalTick += cpu.times[type as keyof typeof cpu.times];
        }
        totalIdle += cpu.times.idle;
      }
      return { idle: totalIdle / cpus.length, total: totalTick / cpus.length };
    }

    const start = cpuAverage();
    await new Promise(res => setTimeout(res, 100));
    const end = cpuAverage();

    const idleDiff = end.idle - start.idle;
    const totalDiff = end.total - start.total;
    const usage = totalDiff > 0 ? (1 - idleDiff / totalDiff) * 100 : 0;

    return {
      content: [{
        type: "text",
        text: `Average CPU usage: ${usage.toFixed(2)}%`
      }],
      isError: false
    };
  }
);

//Define a get_hostname too that returns the hostname of the system
server.tool(
  "get_hostname",
  "Get the hostname of the local machine", {},
  async () => ({
    content: [{
      type: "text",
      text: `Hostname: ${os.hostname()}`
    }],
    isError: false
  })
);

//define get_architecture tool 
server.tool(
  "get_architecture",
  "Get the architecture of the local machine", {},
  async () => ({
    content: [{
      type: "text",
      text: `Architecture: ${os.arch()}`
    }],
    isError: false
  })
);

//define get_uptime tool
server.tool(
  "get_uptime",
  "Get the uptime of the local machine in seconds", {},
  async () => ({
    content: [{
      type: "text",
      text: `Uptime: ${os.uptime()} seconds`
    }],
    isError: false
  })
);
/*server.tool(
  "get_weather",
  "Get weather for a location",
  {
    location: z.string().describe("Location to get weather for, e.g., city name, state, or coordinates"),
  },
  async ({ location }) => {
    if (!location) {
      return {
        content: [
          {
            type: "text",
            text: "Location is required.",
          },
        ],
      };
    }

    // mock weather data
    const conditions = [ "Sunny", "Rainy", "Cloudy", "Snowy" ];
    const weather = {
      location: location,
      temperature: `${Math.floor(Math.random() * 80) + 10}°F`,
      condition: conditions[Math.floor(Math.random() * conditions.length)],
    }
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(weather),
        },
      ],
    };
  }
);*/

export { server };
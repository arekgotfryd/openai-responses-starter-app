"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // For GitHub-flavored Markdown support (tables)

// Custom components to style the table
const components = {
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        {children}
      </table>
    </div>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-semibold text-gray-700">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
      {children}
    </td>
  ),
};
export default function TableDemo() {
  const markdownContent = `
## Recent Blockbuster Comparison

| Movie Title | Opening Weekend | Total Domestic | Worldwide Total |
|-------------|-----------------|----------------|-----------------|
| Avatar: The Way of Water | $134.1M | $684.1M | $2.32B |
| Top Gun: Maverick | $126.7M | $718.7M | $1.49B |
| Black Panther: Wakanda Forever | $181.3M | $453.8M | $859.2M |
| Doctor Strange 2 | $187.4M | $411.3M | $956.0M |
| Jurassic World Dominion | $145.1M | $376.9M | $1.00B |

`;

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <div className="bg-white rounded-lg p-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}

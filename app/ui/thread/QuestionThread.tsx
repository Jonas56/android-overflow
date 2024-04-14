import { Question } from "@/app/lib/definitions";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // Choose your preferred theme

const markdownContent = `
# My Markdown Example

This is a **bold** text.

\`\`\`javascript
const greet = (name) => {
  return 'Hello, ' + name + '!';
}

console.log(greet('World'));
\`\`\`
`;

export default async function QuestionThread({
  question,
}: {
  question: Question;
}) {
  return (
    <div className="flex flex-col justify-between mb-24 md:flex-row">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-semibold mb-2">{question.title}</h2>
          <p className="text-gray-600 mb-4">
            <MarkdownRenderer markdown={question.description} />
          </p>

          <div className="flex items-center text-gray-500 text-sm mb-4">
            <div className="flex items-center mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span>18</span>
            </div>
            <div className="flex items-center mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>3</span>{" "}
            </div>
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://i.pravatar.cc/40?u=jane_doe"
                alt="User Avatar"
              />
              <span>Jane Doe</span>
            </div>
          </div>

          <div className="flex flex-wrap mb-6">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-xs mr-2 mb-2">
              react
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-xs mr-2 mb-2">
              javascript
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-xs mr-2 mb-2">
              dropdown
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-xs mr-2 mb-2">
              navigation
            </span>
          </div>

          <hr className="my-6" />

          <div className="bg-green-100 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Answer</h3>
            <MarkdownRenderer markdown={markdownContent} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://i.pravatar.cc/40?u=jane_doe"
                alt="User Avatar"
              />
              <span>Jane Doe</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>3</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span>18</span>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

function MarkdownRenderer({ markdown }: any) {
  return (
    <div className="">
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus} // Choose your preferred theme
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

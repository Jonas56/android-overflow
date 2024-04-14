import { Threadtype } from "@/app/lib/definitions";
import Thread from "@/app/ui/thread/Thread";

const thread: Threadtype = {
  question: {
    id: 1,
    title:
      "How can I troubleshoot my react multistep form back button that does not work correctly?",
    username: "John Doe",
    creation_date: "1628400000",
    description:
      "I&#39;m not sure why DELETE is an issue considering your settings yet.\r\nTemporarily set your configuration to \r\n```app.use(cors({\r\n    allowedHeaders: &#39;*&#39;,\r\n    credentials: false,\r\n    origin: &#39;*&#39;,\r\n    methods: &#39;*&#39;\r\n}));\r\n```\r\nAnd see if the issue persists.\r\n\r\nAlso ensure that you are not overriding the cors settings on the delete method.\r\n\r\nEdit: Maybe the Access-Control-Allow-Origin Chrome add on is interfering. Consider disabling that or trying in a different browser.\r\n\r\nEdit 2: Try changing to ```http://localhost:3000``` from ```localhost:3000``` The line doesn&#39;t actually need the brackets either since its one item. So this would work: \r\n```origin: &#39;http://localhost:3000&#39;,```\r\n\r\nEdit 3: Try adding an additional step in the backend (after cors settings are set) to log the cors headers from the frontend and from postman (edit for typescript):\r\n```\r\napp.use((req, res, next) =&gt; {\r\n    console.log(&#39;CORS headers:&#39;, res.getHeaders());\r\n    next();\r\n});\r\n```",
    votes: -10,
    tags: ["kotlin", "retrofit"],
    userAvatarLink:
      "https://lh3.googleusercontent.com/a/ACg8ocKTyUzUwFxVAcU_eWsno2NQHtTjmf8z2Cpa_KPViGWR7nU=k-s256",
    userProfileLink: "https://stackoverflow.com/users/23139089/jean-mako",
    has_accepted_answer: true,
    questionLink: "https://stackoverflow.com/questions/12345",
  },
  answer: {
    id: 1,
    username: "Jane Doe",
    creation_date: "1628400000",
    description: "Answer description",
    votes: 10,
    userAvatarLink:
      "https://lh3.googleusercontent.com/a/ACg8ocKTyUzUwFxVAcU_eWsno2NQHtTjmf8z2Cpa_KPViGWR7nU=k-s256",
    userProfileLink: "https://stackoverflow.com/users/23139089/jean-mako",
  },
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="container mx-auto">
      <Thread thread={thread} />
    </main>
  );
}

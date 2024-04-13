import Header from "@/app/ui/home/header";
import Questions from "@/app/ui/home/Questions";
import axios from "axios";

const questions = [
  {
    id: 1,
    title:
      "SocketException: Connection refused when connecting to PostgreSQL from mobile device",
    tags: ["android", "java", "kotlin", "ui"],
    votes: "0",
    userimageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    username: "jonaaaaaaasnow",
  },
  {
    id: 2,
    title:
      "SocketException: Connection refused when connecting to PostgreSQL from mobile device SocketException: Connection refer when connecting to PostgreSQL from mobile device",
    tags: ["android", "java", "kotlin", "ui"],
    votes: "1",
    userimageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    username: "jonsnow",
  },
  {
    id: 3,
    title: "Dries Vincent",
    tags: ["android", "java", "kotlin", "ui"],
    votes: "10",
    userimageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    username: "jonsnow",
  },
  {
    id: 4,
    title: "Lindsay Walton",
    tags: ["android", "java", "kotlin", "ui"],
    votes: "10",
    userimageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    username: "jonsnow",
  },
  {
    id: 5,
    title: "Courtney Henry",
    tags: ["android", "java", "kotlin", "ui"],
    votes: "20",
    userimageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    username: "jonsnow",
  },
  {
    id: 6,
    title: "Tom Cook",
    tags: ["android", "java", "kotlin", "ui"],
    votes: "20",
    userimageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    username: "jonsnow",
  },
  {
    id: 10,
    title:
      "SocketException: Connection refused when connecting to PostgreSQL from mobile device",
    tags: ["android", "java", "kotlin", "ui"],
    votes: "0",
    userimageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    username: "jonaaaaaaasnow",
  },
  {
    id: 12,
    title:
      "SocketException: Connection refused when connecting to PostgreSQL from mobile device",
    tags: ["android", "java", "kotlin", "ui"],
    votes: "0",
    userimageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    username: "jonaaaaaaasnow",
  },
  {
    id: 14,
    title:
      "SocketException: Connection refused when connecting to PostgreSQL from mobile device",
    tags: ["android", "java", "kotlin", "ui"],
    votes: "0",
    userimageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    username: "jonaaaaaaasnow",
  },
  {
    id: 199,
    title:
      "SocketException: Connection refused when connecting to PostgreSQL from mobile device",
    tags: ["android", "java", "kotlin", "ui"],
    votes: "0",
    userimageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    username: "jonaaaaaaasnow",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-100 flex flex-col lg:px-60 p-10 py-24"></main>
  );
}

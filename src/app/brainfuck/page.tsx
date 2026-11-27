import { BrainfuckIde } from "@/components/brainfuck/BrainfuckIde";
import { BrainfuckSettings } from "@/components/brainfuck/BrainfuckSettings";

export const metadata = {
  title: "brainfuck IDE — avery.pet",
  description: "a time-travelling brainfuck IDE – full execution trace with live tape preview",
};

export default function BrainfuckPage() {
  return (
    <div className="flex flex-col gap-6">
      <BrainfuckSettings />
      <BrainfuckIde />
    </div>
  );
}

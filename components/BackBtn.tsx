import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface BackBtnProps {
  onBack: () => void;
}

export default function BackBtn({ onBack }: BackBtnProps) {
  return (
    <Button
      size={"lg"}
      className="rounded-lg active:scale-95 hover-effect bg-event-green hover:bg-event-green/90 text-white"
      onClick={onBack}
    >
      <ArrowLeft size={18} />
      Back
    </Button>
  );
}

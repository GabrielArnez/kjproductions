import { Modal, ModalContent } from "@nextui-org/modal";
import { useRouter, useSearchParams } from "next/navigation";

export function VideoModal() {
  let searchParams = useSearchParams();
  const router = useRouter();

  const show = searchParams.get("show");
  const poster = searchParams.get("poster");

  const handleCloseModal = () => {
    router.push(`/${window.location.hash}`);
  };

  return (
    <Modal
      isOpen={!!show}
      onOpenChange={handleCloseModal}
      classNames={{
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        closeButton: "hover:bg-white/5 active:bg-white/10 z-50 text-2xl",
      }}
    >
      <ModalContent className="m-10 overflow-hidden">
        <video controls preload="none" className="h-full">
          <source src={show} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </ModalContent>
    </Modal>
  );
}

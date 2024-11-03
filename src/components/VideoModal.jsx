import { Modal, ModalContent } from "@nextui-org/modal";
import { X } from "lucide-react";
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
        closeButton: "hover:bg-white/5 active:bg-white/10 z-50",
      }}
    >
      <ModalContent className="w-96 m-10 border-white-500 border rounded-md overflow-hidden">
        <video controls preload="none" className="h-full">
          <source src={show} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </ModalContent>
    </Modal>
    // <div
    //   onClick={() => console.log("aopba")}
    //   className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50 m-50"
    // >
    //   <button onClick={() => console.log("aopba1")}>
    //     <div className="w-30  shadow-lg rounded-md  relative">
    //       <div className="text-center h-screen p-6">

    //         <div className="absolute top-0 right-0">
    //           <button onClick={handleCloseModal}>
    //             <X className="text-white" size={34} />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </button>
    // </div>
  );
}

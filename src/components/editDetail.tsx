// "use client";

// import React, {useContext} from "react";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
// } from "@nextui-org/react";

// import { DashBoardContext } from "@/app/dashboard/layout";
// import { SkincareTable } from "@/components/skincare/skincareTable";
// import { Iskincare } from "@/interface/admin";


// const EditDetail  = () => {

//   const context = useContext(DashBoardContext);
//   const { isOpen ,setIsOpen , skincareItem} = context!;


//   const handleClose = () => {
//     setIsOpen(false);
//   }

//   return (
//     <>
//       <Modal size="full" isOpen={isOpen} onClose={handleClose}>
//         <ModalContent>
//           <ModalHeader>Edit Skincare</ModalHeader>
//           <form>
//             <ModalBody>
//               <SkincareTable 
//                 skincareItem={skincareItem ?? {} as Iskincare}
//                 readOnly={false}
//               />
//             </ModalBody>
//           </form>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default EditDetail;

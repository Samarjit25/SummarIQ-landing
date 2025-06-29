"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/use-disclosure";
import { Link } from "@heroui/link";

export default function Hero() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="relative justify-center items-center">
      <section className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center"
        >
          <span className="w-fit h-full text-sm bg-card px-2 py-1 border border-border rounded-full">
  AI-Powered Productivity
</span>
<h1 className="text-4xl font-medium tracking-tighter mx-auto md:text-6xl text-pretty bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
  Summarize Meetings. Track Action Items. Save Hours.
</h1>
<p className="max-w-2xl text-lg mx-auto text-muted-foreground text-balance">
  Automatically generate meeting summaries and action items from your Zoom or Google Meet calls — and keep your team aligned effortlessly.
</p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <Button onPress={onOpen} color="primary" variant="shadow">
              See more
            </Button>
            <Modal
              isOpen={isOpen}
              placement="center"
              onOpenChange={onOpenChange}
            >
              <ModalContent>
                <ModalHeader>Samarjit Roy</ModalHeader>
                <ModalBody>
                  I&aposm a developer and designer with a passion of creating web applications. 
                </ModalBody>
                <ModalFooter>
                  <Button
                    as={Link}
                    href="https://x.com/SamarjitRoy25"
                    color="primary"
                    variant="solid"
                    size="sm"
                  >
                    Connect on{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="none"
                      viewBox="0 0 1200 1227"
                    >
                      <path
                        fill="currentColor"
                        d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                      />
                    </svg>
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none "
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg] [will-change:transform]"></div>
        </div>
      </motion.div>
    </div>
  );
}

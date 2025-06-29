"use client";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
  {
    name: "Free Plan",
    desc: "Get started with AI-powered meeting summaries",
    price: 0,
    isMostPop: false,
    features: [
      "Up to 3 meeting summaries per month",
      "Basic action item extraction",
      "Google Meet support (upload recordings)",
      "Email export of summaries"
    ],
  },
  {
    name: "Pro Plan",
    desc: "For teams who run frequent meetings",
    price: 12,
    isMostPop: true,
    features: [
      "Up to 30 meeting summaries/month",
      "Zoom & Google Meet integration",
      "Advanced action item extraction with assignee/due dates",
      "Slack & Notion export",
      "Priority email support"
    ],
  },
  {
    name: "Enterprise Plan",
    desc: "For companies needing automation at scale",
    price: 29,
    isMostPop: false,
    features: [
      "Unlimited meeting summaries",
      "Real-time transcription & summaries",
      "Custom integrations (Trello, Jira, etc.)",
      "Admin dashboard & user roles",
      "Dedicated support & onboarding"
    ],
  },
];


  return (
    <motion.section
      id="pricing"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="max-w-screen-xl w-full mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold tracking-tighter sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Pricing plans offered by us
        </h3>
        <p className="max-w-xl text-muted-foreground tracking-tighter text-center">
          Select the plan that best suits your needs.
        </p>
      </div>
      <div className="mt-16 gap-10 grid lg:grid-cols-3 place-content-center">
        {plans.map((item, idx) => (
          <Card
            key={idx}
            shadow="none"
            className={`relative rounded-[20px] p-[3px] will-change-transform ${
              item.isMostPop ? "sm:scale-110" : ""
            }`}
          >
            {item.isMostPop ? (
              <span className="absolute inset-0.5 rounded-[18px]  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#016FEE_70%,#C7DBFB_100%)]" />

            ) : (
              <span className="absolute inset-[-1000%] bg-border" />
            )}
            <div className="z-[2] flex flex-col justify-between w-full h-full bg-card rounded-[18px] p-5">
              <CardBody className="w-full flex items-start gap-3">
                <div className="flex flex-col">
                  <h4 className="text-xl font-light">{item.name}</h4>
                  <span className="text-muted-foreground text-sm font-light">
                    {item.desc}
                  </span>
                </div>
                <span className="text-2xl font-light">
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>

                <Divider />

                <div className="flex flex-col gap-5 pb-5">
                  <span className="text-muted-foreground text-sm font-light">
                    Includes
                  </span>
                  <ul className="flex flex-col gap-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="text-sm font-light">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardBody>
              <CardFooter className="p-0">
                <Button
                  className="w-full"
                  variant="solid"
                  color={item.isMostPop ? "primary" : "default"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}

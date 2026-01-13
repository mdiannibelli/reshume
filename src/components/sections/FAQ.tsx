import { SectionWrapper } from "@/layouts";
import { useTranslation } from "react-i18next";
import { Badge } from "..";
import { FAQItem } from "./FAQItem";

export function FAQ() {
  const { t } = useTranslation();

  const questions = Array.from({ length: 10 }, (_, i) => i + 1).map((num) => ({
    question: t(`HOME.FAQ.QUESTIONS.${num}.QUESTION`),
    answer: t(`HOME.FAQ.QUESTIONS.${num}.ANSWER`),
  }));

  return (
    <SectionWrapper
      sectionId="faq"
      resetStyles
      className="bg-(--background-secondary) mt-16"
    >
      <Badge text="HOME.FAQ.BADGE" />
      <div className="container mx-auto px-3 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-(--text-secondary)">
              {t("HOME.FAQ.TITLE")}
            </span>
          </h2>
          <p className="text-xl text-(--text-secondary) max-w-2xl mx-auto py-8">
            {t("HOME.FAQ.DESCRIPTION")}
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {questions.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

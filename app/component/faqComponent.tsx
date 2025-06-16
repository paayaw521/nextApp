import React from 'react';
import FaqItem from './FaqItem';

const faqs = [
    {
        question: 'How many days am I required to be in office',
        answer: 'At least 3 days in a week. Your selected days should be communicated with your lead beforehand.',
    },
    {
        question: 'What happens if I spend more than 6 hours and 30 minutes in the office but arrive later than 10:00 AM? Will my streak break?',
        answer: 'No, your streak will not break. However, your lead will be notified of your absence on the originally selected day.',
    },
    {
        question: 'What happens if I forget to clock in using the logger? Is my day lost?',
        answer: 'If you do not clock in with the logger, your data source is solely reliant on the access control but in case the access control is offline, your data for that day might be inaccurate. So we encourage everyone to use the logger once in a while to help keep accurate data.',
    },
    {  question: `What is the 'Weekly Quota'?`,
        answer: ` It is simply a visual indicator indicate that keeps track of how many full days (out of the minimum 3 days) you have been to the office for the current work week.`,
    },
    {   question: `What happens if I take a sick day or a holiday?`,
        answer: `If the sick day/holiday falls on one of your selected office days, your streak will be maintained and will not reset.`,
    },
    {question: `Will my streak break if I do not come to the office on my selected day but attend on a different day?`,
        answer: `No, your streak will not break. However, your lead will be notified of your absence on the originally selected day.`,
    },

];
const FaqComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 p-4 sm:p-20 shadow">
            <h2 className="text-black text-center text-xl sm:text-2xl font-semibold mb-8 sm:mb-12">FAQ</h2>
            {/* Mobile layout */}
            <div className="sm:hidden space-y-4">
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
            {/* Desktop layout  */}
            <div className="hidden sm:flex gap-12">
                <div className="flex-1 space-y-25">
                    {faqs.filter((_, index) => index % 2 === 0).map((faq, index) => (
                        <FaqItem key={index * 2} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
                <div className="flex-1 space-y-25">
                    {faqs.filter((_, index) => index % 2 === 1).map((faq, index) => (
                        <FaqItem key={index * 2 + 1} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqComponent;
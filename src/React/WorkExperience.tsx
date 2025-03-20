
const CalendarIcon = () => (
    <svg
        className="w-2.5 h-2.5 text-white dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
    </svg>
);

const TimelineItem = ({
    company,
    date,
    position,
    task,
    isCurrent = false,
}: {
    company: string;
    date: string;
    position: string;
    task: string[];
    isCurrent?: boolean;
}) => (
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-300 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-600">
            <CalendarIcon />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {position}
            {isCurrent && (
                <span className="bg-blue-100 text-yellow-50 text-sm font-medium me-2 px-2.5 py-0.5 rounded-xl dark:bg-yellow-600 dark:text-blue-50 ms-3">
                    Current
                </span>
            )}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {date}
        </time>
        <h4 className=" font-bold text-gray-500 dark:text-gray-400">
            {company}
        </h4>
        <ul className="space-y-2">
            {task.map((task, index) => (
                <li
                    key={index}
                    className="flex items-center gap-2 text-base font-normal text-gray-500 dark:text-gray-400"
                >
                    <svg
                        className="w-4 h-4 flex-shrink-0 text-yellow-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.17157L16.2426 7.75736L10.5858 13.4142Z" />
                    </svg>
                    <span>{task}</span>
                </li>
            ))}
        </ul>
    </li>
);

const WorkTimeline = () => {
    const experiences = [
        {
            company: "Adamata Indonesia",
            date: "Jan 2025 - Present",
            position: "Machine Learning Engineer Intern",
            task: [
                "Developing and deploying machine learning models for recommendation system",
                "Optimizing and improving existing machine learning models",
                "Collaborating with data engineers to improve data pipeline",
            ],
            isCurrent: true,
        },
        {
            company: "Ruang Guru",
            date: "Sept 2024 - Dec 2024",
            position: "Artificial Intelligence Engineer Intern",
            task: [
                "Developing and deploying machine learning models for recommendation system",
                "Optimizing and improving existing machine learning models",
                "Collaborating with data engineers to improve data pipeline",
            ],
        },
        {
            company: "XL Axiata (X-Camp)",
            date: "Aug 2024",
            position: "Product Development Intern",
            task: [
                "Developing and deploying machine learning models for recommendation system",
                "Optimizing and improving existing machine learning models",
                "Collaborating with data engineers to improve data pipeline",
            ],
        },
    ];

    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {experiences.map((exp, index) => (
                <TimelineItem
                    key={index}
                    company={exp.company}
                    date={exp.date}
                    position={exp.position}
                    task={exp.task}
                    isCurrent={exp.isCurrent}
                />
            ))}
        </ol>
    );
};

export default WorkTimeline;

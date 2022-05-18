import { useState } from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  labels: string[];
  children: React.ReactNode[];
}

export const Tabs: React.FC<Props> = (props) => {
  const { labels, className, children, ...rest } = props;
  const [current, setCurrent] = useState(0);

  return (
    <div {...rest} className={`${className}`}>
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        role="tablist"
      >
        {labels.map((label, index) => (
          <li key={label} className="nav-item" role="presentation">
            <button
              className={`block font-medium text-xs leading-tight uppercase border-b-2 border-transparent px-6 py-3 my-2 hover:bg-gray-100 ${
                index === current ? "border-b-black" : ""
              }`}
              role="tab"
              aria-controls={`tabs-${label}`}
              aria-selected={index === current}
              onClick={() => setCurrent(index)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {children && children.length > 0
          ? children.map((child, index) => (
              <div
                key={index}
                className={`tab-pane fade show ${
                  index !== current ? "hidden" : ""
                }`}
                id="tabs-home"
                role="tabpanel"
                aria-labelledby={`tabs-${labels[index]}-tab`}
              >
                {child}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

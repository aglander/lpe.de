import * as React from "react"

const Example = ({ title, children, number, link, image }) => {
  const content = (
    <div class={`inline-block sm:w-1/2 lg:w-1/3 align-top text-left`}>
      {image ? (
        <div className="border-green border-2 rounded-2xl bg-white p-5 m-1">
          <img 
            src={image} 
            alt={title}
            className="inline-block mb-2 h-[50px]"
          />
          <h4 class="text-xl mb-2 font-bold hyphens">{title}</h4>
          <p class="hyphens text-base">{children}</p>
        </div>
      ) : (
          <div className="m-4">
            <span class="border-green border-2 rounded-2xl bg-white px-4 py-2 text-green text-2xl inline-block mb-2">{number}</span>
            <h4 class="text-xl mb-2 font-bold hyphens">{title}</h4>
            <p class="hyphens text-base">{children}</p>
          </div>
      )}
    </div>
  );

  return link ? <a href={link} target="_blank" rel="noopener noreferrer">{content}</a> : content;
}

export default Example

import React, { FunctionComponent } from "react";

type Props = {
  preText?: string,
  title: string
}
const PageHeader: FunctionComponent<Props> = ({ preText, title }: Props) => {
  return (
    <h2 className='font-base text-white' style={{ margin: "4rem 0" }}>
      <span className="text-dark-grey">{preText}</span> {title}
    </h2>
  )
}

export default PageHeader
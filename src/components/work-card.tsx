import Image from "next/image"
import { FC } from "react"


export interface WorkCardProps {
  path: string,
  post: string,
  name: string,
  description: string,
  company: string
}

const WorkCard: FC<WorkCardProps> = ({ post, name, company, description }) => {
  return (
    <div className="w-full h-[720px] relative">
      <div className="absolute inset-0">
        <Image src={post} alt={name} style={{ objectFit: "cover" }}></Image>
      </div>
      <div className="">
        <div>{company}</div>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default WorkCard
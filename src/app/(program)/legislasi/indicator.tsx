'use client'
export interface IndicatorProps {
    label:string
    color:string|null
}
export default function Indicator({ label,color }:IndicatorProps) {
  return (
    <span className="flex items-center text-xs font-[400] text-gray-900 dark:text-white"><span
      className={`flex w-2.5 h-2.5 rounded-full mr-1.5 flex-shrink-0`} style={{backgroundColor:(color!=null?color:'#000')}}></span>{label}</span>
  )
}

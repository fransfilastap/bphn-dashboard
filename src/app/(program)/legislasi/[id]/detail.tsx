'use client'

import { Department, Program, Regulation, Stage } from '@/schema'
import Indicator from '@/app/(program)/legislasi/indicator'

export default function Detail({regulation,department,program,stage,performaceColor}: { regulation:Regulation, program: Program,department:Department, stage:Stage,performaceColor:string }) {
  return (
    <div className={'border border-dashed border-gray-300 rounded-md p-6 flex flex-col gap-2 bg-gray-50'}>
      <h5 className="text-xl font-bold dark:text-white">Rincian</h5>
      <div className={'flex flex-col gap-1'}>
          <span className={'font-[600] text-xs text-gray-500 uppercase'}>Jenis</span>
          <span className={'font-[400] text-sm'}>{regulation.type}</span>
      </div>
      <div className={'flex flex-col gap-1'}>
        <span className={'font-[600] text-xs text-gray-500 uppercase'}>Inisiatif</span>
        <span className={'font-[400] text-sm'}>{regulation.initiative}</span>
      </div>
      <div className={'flex flex-col gap-1'}>
        <span className={'font-[600] text-xs text-gray-500 uppercase'}>Instansi Pemrakarsa</span>
        <span className={'font-[400] text-sm'}>{department.name}</span>
      </div>
      <div className={'flex flex-col gap-1'}>
        <span className={'font-[600] text-xs text-gray-500 uppercase'}>Progres</span>
        <Indicator label={stage.name} color={performaceColor}/>
      </div>
      <div className={'flex flex-col gap-1'}>
        <span className={'font-[600] text-xs text-gray-500 uppercase'}>Materi Muatan</span>
        <div className={'prose prose-sm'} dangerouslySetInnerHTML={{__html: regulation.material}}></div>
      </div>
    </div>
  )
}

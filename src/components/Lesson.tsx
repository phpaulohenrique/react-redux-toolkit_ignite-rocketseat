import { PlayCircle, Video } from "lucide-react";


interface LessonProps{
    title: string
    duration: string
    onPlay: () => void
    isCurrent?: boolean

}

export function Lesson({ duration, title, onPlay, isCurrent = false}: LessonProps){

    return(
    <button onClick={onPlay} disabled={isCurrent} className="flex items-center gap-3 text-sm text-zinc-300 data-[active=true]:text-emerald-400 hover:enabled:text-zinc-50" data-active={isCurrent}>
        {isCurrent ? (
            <PlayCircle className="w-4 h-4 text-emerald-400"/>)
            :(<Video className="w-4 h-4 text-zinc-500"/>)
        }
        <span>{title}</span>
        <span className="ml-auto font-mono text-xs text-zinc-400">{duration}</span>
    </button>
    )
}
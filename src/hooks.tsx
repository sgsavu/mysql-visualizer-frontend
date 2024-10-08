import { Subject } from "@sgsavu/subject";
import { useEffect, useState, SetStateAction } from "react";

export const useObservable = <T,>(observable: Subject<T>) => {
    const [value, setValue] = useState<T>()

    useEffect(() => {
        const sub = observable.subscribe(v => setValue(v as SetStateAction<T | undefined>))
        return () => { sub.unsubscribe() }
    }, [observable])

    return value
}
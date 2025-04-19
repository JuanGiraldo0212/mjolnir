import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Play } from 'lucide-react';

const ExerciseCard = (props: { open: boolean }) => {
    const { open } = props;
    return (
        <>
            {!open ? (<div className="p-2 border rounded-md">
                <p className="underline">Back Squat</p>
                <div className="flex justify-between">
                    <p>3 Sets - 8 Reps</p>
                    <p>Weight: 135lbs</p>
                </div>
            </div>) : (<div className="p-2 flex flex-col gap-y-3 border rounded-md bg-secondary">
                <div className="flex justify-between">
                    <h1 className="font-bold underline">Back Squat</h1>
                    <p>2/3 Sets</p>
                </div>
                <p>8 Reps - Weight: 135 lbs</p>
                <Separator />
                <p>Set 1: 8 Reps - Complete</p>
                <p>Set 2: 8 Reps - Incomplete</p>
                <div className="w-full flex justify-center">
                    <Button className="w-full">
                        Start Set<Play />
                    </Button>
                </div>
            </div>)}
        </>
    )
}

export default ExerciseCard;
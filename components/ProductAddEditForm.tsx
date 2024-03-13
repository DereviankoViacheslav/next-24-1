'use client';

import { Input } from '@/components/ui/input';
import { VolumesEntity, MakersEntity } from '@/db-types';
import { v4 as uuidv4 } from "uuid";
import { MakerSelect } from '@/components/MakerSelect';
import { VolumeSelect } from '@/components/VolumeSelect';
import { SubmitButton } from '@/components/SubmitButton';
import { useFormState } from 'react-dom';
import { AddProductResult } from '@/actions/addProduct';
import { useEffect, useRef } from 'react';

interface ProductAddEditFormProps {
    makers?: MakersEntity[] | null;
    volumes?: VolumesEntity[] | null;
    action: (state: AddProductResult, formData: FormData) => void;
}

export const ProductAddEditForm: React.FunctionComponent<
    ProductAddEditFormProps
> = ({ makers, volumes, action }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction] = useFormState(
        action as any,
        {} as AddProductResult,
    );

    useEffect(() => {
        if (state.status) {
            formRef.current?.reset();
        }
    }, [state]);

    return (
        <form
            ref={formRef}
            action={formAction}
            className="flex flex-col gap-4 max-w-lg"
        >
            {state.status ? (
                <div className="p-4 bg-green-600 text-white">
                    {state?.message}
                </div>
            ) : null}
            {state.status === false ? (
                <div className="p-4 bg-red-600 text-white">
                    {state?.message}
                </div>
            ) : null}
            <input type="hidden" value={uuidv4()} name="id" />
            <div className="flex flex-col gap-2">
                <label>Name:</label>
                <Input name="flavor" required />
            </div>
            <div className="flex flex-col gap-2">
                <label>Maker:</label>
                <MakerSelect data={makers} />
            </div>
            <div className="flex flex-col gap-2">
                <label>Volume:</label>
                <VolumeSelect data={volumes} />
            </div>
            <div>
                <SubmitButton type="submit">Add</SubmitButton>
            </div>
        </form>
    );
};

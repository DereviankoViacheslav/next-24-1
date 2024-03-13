'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { forwardRef } from 'react';
import { useFormStatus } from 'react-dom';

export const SubmitButton = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const { pending } = useFormStatus();
        return (
            <Button type="submit" {...props} disabled={pending}>
                {pending ? 'Submiting...' : props.children}
            </Button>
        );
    },
);

SubmitButton.displayName = 'SubmitButton';

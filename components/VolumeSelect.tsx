import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { VolumesEntity } from '@/db-types';

interface ColorSelectProps {
    data?: VolumesEntity[] | null;
}

export const VolumeSelect: React.FunctionComponent<ColorSelectProps> = ({
    data,
}) => {
    return (
        <Select name="colorId">
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {data?.map(({ id, value }) => (
                    <SelectItem key={`sel-col-${value}`} value={id}>
                        {value}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

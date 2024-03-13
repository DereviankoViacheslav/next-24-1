import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { MakersEntity } from '@/db-types';

interface MakerSelectProps {
    data?: MakersEntity[] | null;
}

export const MakerSelect: React.FunctionComponent<MakerSelectProps> = ({
    data,
}) => {
    return (
        <Select name="makeId">
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {data?.map(({ id, name }) => (
                    <SelectItem key={`sel-make-${id}`} value={id}>
                        {name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

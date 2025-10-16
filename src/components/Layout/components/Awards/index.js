import ListSection from '~/components/common/ListSection';
import { awardsList } from '~/data/awardsData';

function Awards() {
    return <ListSection title="Awards & Recognition" items={awardsList} renderItem={(award) => <span>{award}</span>} />;
}

export default Awards;

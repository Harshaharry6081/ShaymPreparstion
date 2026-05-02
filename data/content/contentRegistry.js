// ─────────────────────────────────────────────
//  Content Registry – imports ALL day modules
//  statically so study.js can do a simple lookup.
// ─────────────────────────────────────────────

// Phase 1
import { day1Content }  from './phase1/day1.js';
import { day2Content }  from './phase1/day2.js';
import { day3Content }  from './phase1/day3.js';
import { day4Content }  from './phase1/day4.js';
import { day5Content }  from './phase1/day5.js';

// Phase 2
import { day6Content }  from './phase2/day6.js';
import { day7Content }  from './phase2/day7.js';
import { day8Content }  from './phase2/day8.js';
import { day9Content }  from './phase2/day9.js';
import { day10Content } from './phase2/day10.js';
import { day11Content } from './phase2/day11.js';
import { day12Content } from './phase2/day12.js';
import { day13Content } from './phase2/day13.js';

// Phase 3
import { day14Content } from './phase3/day14.js';
import { day15Content } from './phase3/day15.js';
import { day16Content } from './phase3/day16.js';
import { day17Content } from './phase3/day17.js';
import { day18Content } from './phase3/day18.js';
import { day19Content } from './phase3/day19.js';
import { day20Content } from './phase3/day20.js';

// Phase 4
import { day21Content } from './phase4/day21.js';
import { day22Content } from './phase4/day22.js';
import { day23Content } from './phase4/day23.js';
import { day24Content } from './phase4/day24.js';
import { day25Content } from './phase4/day25.js';

// Phase 5
import { day26Content } from './phase5/day26.js';
import { day27Content } from './phase5/day27.js';
import { day28Content } from './phase5/day28.js';
import { day29Content } from './phase5/day29.js';
import { day30Content } from './phase5/day30.js';

/** Lookup map: day number → content object */
export const contentRegistry = {
    1:  day1Content,
    2:  day2Content,
    3:  day3Content,
    4:  day4Content,
    5:  day5Content,
    6:  day6Content,
    7:  day7Content,
    8:  day8Content,
    9:  day9Content,
    10: day10Content,
    11: day11Content,
    12: day12Content,
    13: day13Content,
    14: day14Content,
    15: day15Content,
    16: day16Content,
    17: day17Content,
    18: day18Content,
    19: day19Content,
    20: day20Content,
    21: day21Content,
    22: day22Content,
    23: day23Content,
    24: day24Content,
    25: day25Content,
    26: day26Content,
    27: day27Content,
    28: day28Content,
    29: day29Content,
    30: day30Content,
};

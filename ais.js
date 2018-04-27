import { preprocessFields } from './utils'
// http://catb.org/gpsd/AIVDM.html

export const startWithFields = [type, repeat, mmsi]
export const addFields = preprocessFields(startWithFields)

export const classA = [
  status, turn,
  speed, accuracy, lon, lat,
  course, heading, second,
  maneuver, spare3,
  raim, radio,
]
export const stationTime = [
  year, month, day, hour, minute, second,
  accuracy, lon, lat,
  epfd, spare10,
  raim, radio,
])
export export const msgTypes = [
  {
    id: 1,
    description: 'Position Report Class A',
    fields: classA,
  },
  {
    id: 2,
    description: 'Position Report Class A (Assigned schedule)',
    fields: classA,
  },
  {
    id: 3,
    description: 'Position Report Class A (Response to interrogation)',
    fields: classA,
  },
  {
    id: 4,
    description: 'Base Station Report',
    fields: stationTime,
  },
  {
    id: 5,
    description: 'Static and Voyage Related Data',
    fields: [
      aisVersion, imo, callsign,
      shipname, shiptype, toBow, toStern, toPort, toStarboard, epfd,
      month, day, hour, minute,
      draught, destination, dte, spare1,
    ],
  },
  {
    id: 6,
    description: 'Binary Addressed Message',
    fields: [],
  },
  {
    id: 7,
    description: 'Binary Acknowledge',
    fields: [],
  },
  {
    id: 8,
    description: 'Binary Broadcast Message',
    fields: [
    ],
  },
  {
    id: 9,
    description: 'Standard SAR Aircraft Position Report',
    fields: [

    ],
  },
  {
    id: 10,
    description: 'UTC and Date Inquiry',
    fields: [],
  },
  {
    id: 11,
    description: 'UTC and Date Response',
    fields: stationTime,
  },
  { id: 12, description: 'Addressed Safety Related Message' },
  { id: 13, description: 'Safety Related Acknowledgement' },
  {
    id: 14,
    description: 'Safety Related Broadcast Message',
    fields: [
      spare2, { len: 968, id: 'text', type: 't' },
    ],
  },
  { id: 15, description: 'Interrogation' },
  { id: 16, description: 'Assignment Mode Command' },
  { id: 17, description: 'DGNSS Binary Broadcast Message' },
  {
    id: 18,
    description: 'Standard Class B CS Position Report',
    fields: [
      reserved,
      speed,
      accuracy, lon, lat,
      course, heading,
      second,
      regional2, cs, display, dsc, band, msg22, assigned,
      raim, radio,
    ],
  },
  {
    id: 19,
    description: 'Extended Class B Equipment Position Report',
    fields: [
      reserved,
      speed,
      accuracy, lon, lat,
      course, heading, second,
      regional4,
      shipname, shiptype, toBow, toStern, toPort, toStarboard, epfd,
      raim, dte, assigned, spare4,
    ],
  },
  { id: 20, description: 'Data Link Management' },
  {
    id: 21,
    description: 'Aid-to-Navigation Report',
    fields: [

    ],
  },
  { id: 22, description: 'Channel Management' },
  { id: 23, description: 'Group Assignment Command' },
  {
    id: 24,
    description: 'Static Data Report',
    fields: [

    ],
  },
  { id: 25, description: 'Single Slot Binary Message,' },
  { id: 26, description: 'Multiple Slot Binary Message With Communications State' },
  {
    id: 27,
    description: 'Position Report For Long-Range Applications',
    fields: [

    ],
  },
]
// addFields, preprocessFields

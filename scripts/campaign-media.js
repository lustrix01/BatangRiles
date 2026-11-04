/**
 * ============================================================================
 * CAMPAIGN MEDIA REGISTRY & ARCHIVE DATA
 * "Every Light Has a Story" - Filipino Christmas Donation Drive
 * ============================================================================
 * 
 * Rules strictly enforced:
 * - Uses ONLY the actual verified campaign files in assets/y1 and assets/y2.
 * - Zero stock images or placeholder substitutions fabricated.
 * - y3 is prepared dynamically for incoming content with reserved metadata.
 */

export const CAMPAIGN_ARCHIVE = {
  theme: "Batang Riles Christmas Party Donation Drive - Every Light Has a Story",
  currentYear: 4,
  community: "Batang Riles Community (Railway Children & Families)",
  symbolism: "The traditional Philippine Parol lighting the railway tracks, representing hope, warmth, and grassroots kindness.",
  soundtrack: {
    title: "Himig Ng Pasko",
    artist: "APO Hiking Society",
    file: "assets/APO Hiking Society - Himig Ng Pasko (Official Lyric Video).mp4",
    type: "video/mp4",
    purpose: "Official background soundtrack and campaign theme song"
  },
    y1: {
      yearKey: "y1",
      title: "Year 1 - The First Spark",
      badge: "Year 1 Archive",
      folder: "assets/y1",
      status: "archived",
      mediaCount: 6,
      items: [
        {
          id: "y1-photo-1",
          type: "image",
          src: "assets/y1/493287965_9624732004231283_4549465918225996649_n.jpg",
          alt: "Year 1 Campaign Outreach - Authentic Moment",
          format: "jpg"
        },
        {
          id: "y1-photo-2",
          type: "image",
          src: "assets/y1/493289802_9624731784231305_7127571553046975064_n.jpg",
          alt: "Year 1 Campaign Outreach - Community Gathering",
          format: "jpg"
        },
        {
          id: "y1-photo-3",
          type: "image",
          src: "assets/y1/493321025_9624731677564649_2545488810557613247_n.jpg",
          alt: "Year 1 Campaign Outreach - Distribution of Blessings",
          format: "jpg"
        },
        {
          id: "y1-photo-4",
          type: "image",
          src: "assets/y1/493323425_9624731937564623_9140821885106563697_n.jpg",
          alt: "Year 1 Campaign Outreach - Smiles of Hope",
          format: "jpg"
        },
        {
          id: "y1-photo-5",
          type: "image",
          src: "assets/y1/493323925_9624731910897959_1903460172793317334_n.jpg",
          alt: "Year 1 Campaign Outreach - Shared Warmth",
          format: "jpg"
        },
        {
          id: "y1-photo-6",
          type: "image",
          src: "assets/y1/493724784_9624731857564631_7095615976664399269_n.jpg",
          alt: "Year 1 Campaign Outreach - Children and Families",
          format: "jpg"
        }
      ]
    },

    y2: {
      yearKey: "y2",
      title: "Year 2 - Carrying the Flame",
      badge: "Year 2 Archive",
      folder: "assets/y2",
      status: "archived",
      mediaCount: 5,
      items: [
        {
          id: "y2-photo-1",
          type: "image",
          src: "assets/y2/513997002_23901728916105020_1539537465338944568_n.jpg",
          alt: "Year 2 Campaign Outreach - Growing Impact",
          format: "jpg"
        },
        {
          id: "y2-photo-2",
          type: "image",
          src: "assets/y2/514110249_23901727462771832_808282950336976319_n.jpg",
          alt: "Year 2 Campaign Outreach - Community Volunteers",
          format: "jpg"
        },
        {
          id: "y2-photo-3",
          type: "image",
          src: "assets/y2/514531703_23901727576105154_2039336411891229169_n.jpg",
          alt: "Year 2 Campaign Outreach - Joy of Giving",
          format: "jpg"
        },
        {
          id: "y2-photo-4",
          type: "image",
          src: "assets/y2/515071034_23901727439438501_4105133231036175267_n.jpg",
          alt: "Year 2 Campaign Outreach - Heartfelt Connections",
          format: "jpg"
        },
        {
          id: "y2-video-1",
          type: "video",
          src: "assets/y2/AQO4l5d9cltypX3lUbg4ANPOamBt1sD4AziFFb2eyshOaqZaDnakhgv9P_IVybO64hI0B803xjJjA-Uq58xXal8.mp4",
          alt: "Year 2 Campaign Documentation Reel",
          format: "mp4"
        }
      ]
    },

    y3: {
      yearKey: "y3",
      title: "Year 3 - Lighting Tomorrow",
      badge: "Reserved for Upcoming Year 3",
      folder: "assets/y3",
      status: "reserved",
      // Prepared for dynamic expansion as new content arrives:
      // Preserves existing asset in folder without fabrication or stock substitution
      existingFile: "assets/y3/605530373_122136373076968837_57530036743135763_n.jpg",
      items: [
        {
          id: "y3-photo-1",
          type: "image",
          src: "assets/y3/605530373_122136373076968837_57530036743135763_n.jpg",
          alt: "Year 3 Campaign - In Preparation",
          format: "jpg",
          status: "existing"
        }
      ],
      placeholderNotice: "Year 3 content slots reserved. Actual stories and media will be documented as the drive unfolds."
    }
  }
};


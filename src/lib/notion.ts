type ChangelogItem = {
  version: string;
  date: string;
  title: string;
  description: string;
  items: string[];
  image?: string;
};

export function parseNotionChangelog(blocks: any[]): ChangelogItem[] {
  const result: ChangelogItem[] = [];

  let current: Partial<ChangelogItem> = {};
  let state: 'idle' | 'header' | 'meta' | 'desc' | 'items' = 'idle';

  for (const block of blocks) {
    if (block.type === 'heading_1') {
      if (current.title) {
        result.push({
          version: current.version || '',
          date: current.date || '',
          title: current.title || '',
          description: current.description || '',
          items: current.items || [],
          image: current.image,
        });
        current = {};
      }

      current.title = extractText(block.heading_1.rich_text);
      state = 'meta';
      continue;
    }

    if (state === 'meta' && block.type === 'paragraph') {
      const raw = extractText(block.paragraph.rich_text);
      const versionMatch = raw.match(/\[version=(.+?)\]/);
      const dateMatch = raw.match(/\[date=(.+?)\]/);

      if (versionMatch) current.version = versionMatch[1].trim();
      if (dateMatch) current.date = formatDateLabel(dateMatch[1].trim());

      state = 'desc';
      continue;
    }

    if (state === 'desc' && block.type === 'paragraph') {
      current.description = extractText(block.paragraph.rich_text).trim();
      state = 'items';
      continue;
    }

    if (state === 'items') {
      if (block.type === 'bulleted_list_item') {
        if (!current.items) current.items = [];
        current.items.push(
          extractText(block.bulleted_list_item.rich_text).trim(),
        );
        continue;
      }

      if (block.type === 'image') {
        current.image =
          block.image.type === 'external'
            ? block.image.external.url
            : block.image.file.url;
        continue;
      }

      if (block.type === 'heading_1') {
        state = 'header';
      }
    }
  }

  if (current.title) {
    result.push({
      version: current.version || '',
      date: current.date || '',
      title: current.title || '',
      description: current.description || '',
      items: current.items || [],
      image: current.image,
    });
  }

  return result;
}

function extractText(richText: any[]): string {
  return richText.map((rt) => rt.plain_text).join('');
}

function formatDateLabel(dateStr: string): string {
  const [year, month] = dateStr.split('-');
  const months: Record<string, string> = {
    '01': 'Janvier',
    '02': 'Février',
    '03': 'Mars',
    '04': 'Avril',
    '05': 'Mai',
    '06': 'Juin',
    '07': 'Juillet',
    '08': 'Août',
    '09': 'Septembre',
    '10': 'Octobre',
    '11': 'Novembre',
    '12': 'Décembre',
  };

  return `${months[month] || month} ${year}`;
}

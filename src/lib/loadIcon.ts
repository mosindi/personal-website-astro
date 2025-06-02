import fs from 'fs/promises';

export async function loadIcon(name: string, className = ""): Promise<string> {
  try {
    const iconPath = new URL(`../icons/lucide/${name}.svg`, import.meta.url);
    let svg = await fs.readFile(iconPath, 'utf8');

    // class ekle: sadece ilk <svg ...> etiketi içinde class yoksa ekle
    svg = svg.replace(/<svg([^>]*?)>/, `<svg$1 class="${className}">`);

    return svg;
  } catch (err) {
    console.warn(`❌ Icon "${name}" not found`);
    return `<svg class="${className}"><text x="0" y="15" fill="red">Icon not found</text></svg>`;
  }
}

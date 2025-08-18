export function namecheapProductUrl(domain: string) {
  return `https://www.namecheap.com/domains/registration/results/?domain=${encodeURIComponent(
    domain
  )}`;
}
export function affiliateUrl(destination: string) {
  const base = process.env.IMPACT_AFFILIATE_BASE || "";
  if (!base) return destination;
  return `${base}${encodeURIComponent(destination)}`;
}


export function AminoDate(d?: Date): string {
    return d?.toISOString().split('.')[0] + 'Z'
}

export function AminoDate(d?: Date): string {
    return (d ? d.toISOString().split('.')[0] + 'Z' : "")
}
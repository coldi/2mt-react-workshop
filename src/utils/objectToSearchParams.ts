type PrimitiveValue = string | number | boolean;

export default function objectToSearchParams(obj: Record<string, PrimitiveValue> = {}) {
    const params = Object.entries(obj).map(
        ([key, value]) => `${key}=${encodeURIComponent(value)}`
    );
    return params.join('&');
}

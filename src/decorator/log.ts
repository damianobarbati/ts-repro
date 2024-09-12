export default function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log('Hello TypeScript!');
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

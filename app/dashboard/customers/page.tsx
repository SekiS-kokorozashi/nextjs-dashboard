import CustomersTable from "@/app/ui/customers/table"

export default async function CustomersPage({ searchParams }: {
    searchParams?: {
        query?: string;
    };
}) {
    const query = searchParams?.query || '';

    return (
        <CustomersTable query={query} />
    )
}
import { supabase } from "@/lib/supabase";
import {
    agentImages,
    galleryImages,
    propertiesImages,
    reviewImages,
} from "../lib/data";

const propertyTypes = [
    "House",
    "Townhouse",
    "Condo",
    "Duplex",
    "Studio",
    "Villa",
    "Apartment",
    "Other",
];

const facilities = [
    "Laundry",
    "Parking",
    "Gym",
    "Wifi",
    "Pet_Friendly",
];

const propertyStatuses = ["Available", "Sold", "Pending", "Rented"];

function getRandomSubset<T>(
    array: T[],
    minItems: number,
    maxItems: number
): T[] {
    if (minItems > maxItems) {
        throw new Error("minItems cannot be greater than maxItems");
    }
    if (minItems < 0 || maxItems > array.length) {
        throw new Error(
            "minItems or maxItems are out of valid range for the array"
        );
    }

    const subsetSize =
        Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;
    const arrayCopy = [...array];

    // Fisher-Yates shuffle
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[randomIndex]] = [
            arrayCopy[randomIndex],
            arrayCopy[i],
        ];
    }

    return arrayCopy.slice(0, subsetSize);
}

export async function seed() {
    try {
        console.log("🌱 Starting database seeding...");

        // Step 1: Seed Agents
        console.log("\n📍 Seeding Agents...");
        const agents = [];
        for (let i = 1; i <= 5; i++) {
            const { data: agent, error } = await supabase
                .from("agents")
                .insert({
                    name: `Agent ${i}`,
                    email: `agent${i}@example.com`,
                    avatar: agentImages[Math.floor(Math.random() * agentImages.length)],
                })
                .select()
                .single();

            if (error) throw error;
            agents.push(agent);
        }
        console.log(`✅ Seeded ${agents.length} agents.`);

        // Step 2: Seed Properties
        console.log("\n📍 Seeding Properties...");
        const properties = [];
        for (let i = 1; i <= 20; i++) {
            const assignedAgent = agents[Math.floor(Math.random() * agents.length)];
            const selectedFacilities = getRandomSubset(facilities, 2, 4);

            const { data: property, error } = await supabase
                .from("properties")
                .insert({
                    name: `Property ${i}`,
                    type: propertyTypes[Math.floor(Math.random() * propertyTypes.length)],
                    description: `This is a beautiful property located in a prime area. Property ${i} offers modern amenities and spacious living areas perfect for families or professionals.`,
                    address: `${100 + i} Property Street, City ${i}, State ${Math.floor(i / 5) + 1}`,
                    geoLocation: `${40.7128 + (Math.random() - 0.5) * 0.1},${-74.006 + (Math.random() - 0.5) * 0.1}`,
                    price: Math.floor(Math.random() * 900000) + 100000, // $100k - $1M
                    area: Math.floor(Math.random() * 2500) + 500, // 500-3000 sq ft
                    bedrooms: Math.floor(Math.random() * 5) + 1, // 1-5 bedrooms
                    bathrooms: Math.floor(Math.random() * 4) + 1, // 1-4 bathrooms
                    rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // 3.0-5.0 rating
                    facilities: selectedFacilities,
                    agentId: assignedAgent.id, // ✅ Correct foreign key name
                })
                .select()
                .single();

            if (error) throw error;
            properties.push(property);
            console.log(`   ✅ Seeded property: ${property.name}`);
        }
        console.log(`✅ Seeded ${properties.length} properties.`);

        // Step 3: Seed Galleries (after properties exist)
        console.log("\n📍 Seeding Galleries...");
        let galleryCount = 0;
        for (const property of properties) {
            // Each property gets 3-8 gallery images
            const numGalleries = Math.floor(Math.random() * 6) + 3;

            for (let i = 0; i < numGalleries; i++) {
                const { error } = await supabase
                    .from("galleries")
                    .insert({
                        image: galleryImages[Math.floor(Math.random() * galleryImages.length)],
                        propertyId: property.id, // ✅ Valid property ID
                    });

                if (error) throw error;
                galleryCount++;
            }
        }
        console.log(`✅ Seeded ${galleryCount} galleries.`);

        // Step 4: Seed Reviews (after properties exist)
        console.log("\n📍 Seeding Reviews...");
        let reviewCount = 0;
        for (const property of properties) {
            // Each property gets 3-7 reviews
            const numReviews = Math.floor(Math.random() * 5) + 3;

            for (let i = 0; i < numReviews; i++) {
                const { error } = await supabase
                    .from("reviews")
                    .insert({
                        name: `Reviewer ${reviewCount + 1}`,
                        avatar: reviewImages[Math.floor(Math.random() * reviewImages.length)],
                        review: `This is a ${["great", "wonderful", "fantastic", "amazing", "excellent"][Math.floor(Math.random() * 5)]} property! I ${["highly recommend", "would definitely recommend", "absolutely love", "am very satisfied with"][Math.floor(Math.random() * 4)]} it.`,
                        rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // 3.0-5.0
                        propertyId: property.id, // ✅ Valid property ID
                    });

                if (error) throw error;
                reviewCount++;
            }
        }
        console.log(`✅ Seeded ${reviewCount} reviews.`);

        console.log("\n🎉 Data seeding completed successfully!");
        console.log(`\n📊 Summary:
    - Agents: ${agents.length}
    - Properties: ${properties.length}
    - Galleries: ${galleryCount}
    - Reviews: ${reviewCount}
    `);

    } catch (error) {
        console.error("\n🚫 Error seeding data:", error);
        throw error; // Re-throw to handle in calling code
    }
}

// Optional: Clean database before seeding
export async function cleanDatabase() {
    try {
        console.log("🧹 Cleaning database...");

        // Delete in reverse order of dependencies
        await supabase.from("reviews").delete().neq("id", 0);
        await supabase.from("galleries").delete().neq("id", 0);
        await supabase.from("properties").delete().neq("id", 0);
        await supabase.from("agents").delete().neq("id", 0);

        console.log("✅ Database cleaned successfully!");
    } catch (error) {
        console.error("🚫 Error cleaning database:", error);
        throw error;
    }
}

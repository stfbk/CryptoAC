package eu.fbk.st.cryptoac.model.tuple

import eu.fbk.st.cryptoac.model.tuple.Condition.Companion.parseAccessStructure
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

internal class AccessStructureTest {

    @Test
    fun parse_valid_access_structure_works() {
        assertEquals(
            "Bob or Luca",
            parseAccessStructure("Bob or Luca").toString()
        )

        assertEquals(
            "Alice and (Bob or Luca)",
            parseAccessStructure("Alice and (Bob or Luca)").toString()
        )
        assertEquals(
            "(Bob and Luca) or Alice",
            parseAccessStructure("(Bob and Luca) or Alice").toString()
        )

        assertEquals(
            "(Alice or Bob) and (Carl or Denise)",
            parseAccessStructure("(Alice or Bob) and (Carl or Denise)").toString()
        )
        assertEquals(
            "((Alice or Bob) and Erica) and (Carl or Denise)",
            parseAccessStructure("((Alice or Bob) and Erica) and (Carl or Denise)").toString()
        )
        assertEquals(
            "(Erica and (Alice or Bob)) and (Carl or Denise)",
            parseAccessStructure("(Erica and (Alice or Bob)) and (Carl or Denise)").toString()
        )
        assertEquals(
            "(Carl or Denise) and ((Alice or Bob) and Erica)",
            parseAccessStructure("(Carl or Denise) and ((Alice or Bob) and Erica)").toString()
        )
        assertEquals(
            "(Carl or Denise) and (Erica and (Alice or Bob))",
            parseAccessStructure("(Carl or Denise) and (Erica and (Alice or Bob))").toString()
        )

        assertEquals(
            "Alice and (Carl or (Bob and Luca))",
            parseAccessStructure("Alice and (Carl or (Bob and Luca))").toString()
        )
        assertEquals(
            "((Alice and Carl) or Bob) and Luca",
            parseAccessStructure("((Alice and Carl) or Bob) and Luca").toString()
        )

        assertEquals(
            "Alice and ((Silvio or ((Bob and Carl) and Denise)) and Zuck)",
            parseAccessStructure("Alice and ((Silvio or ((Bob and Carl) and Denise)) and Zuck)").toString()
        )
        assertEquals(
            "Alice or ((Silvio and (Bob and Carl)) and Marco)",
            parseAccessStructure("Alice or (( Silvio and (Bob and Carl)) and Marco)").toString()
        )
    }

    @Test
    fun remove_valid_access_structure_works() {
        parseAccessStructure("Bob or Luca").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Luca")))
            remove(hashSetOf("Luca"))
            assertEquals(
                "Bob",
                this.toString()
            )
        }

        parseAccessStructure("Bob or Luca").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Bob")))
            remove(hashSetOf("Bob"))
            assertEquals(
                "Luca",
                this.toString()
            )
        }

        parseAccessStructure("Bob or Luca").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Bob", "Luca")))
            remove(hashSetOf("Bob", "Luca"))
            assertEquals(
                "",
                this.toString()
            )
        }

        parseAccessStructure("Alice and (Bob or Luca)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Bob")))
            remove(hashSetOf("Bob"))
            assertEquals(
                "Alice and Luca",
                this.toString()
            )
        }

        parseAccessStructure("Alice and (Bob or Luca)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Alice")))
            remove(hashSetOf("Alice"))
            assertEquals(
                "Bob or Luca",
                this.toString()
            )
        }

        parseAccessStructure("Alice and (Bob or Luca)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Luca")))
            remove(hashSetOf("Luca"))
            assertEquals(
                "Alice and Bob",
                this.toString()
            )
        }

        parseAccessStructure("Alice and (Bob or Luca)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Alice", "Bob", "Luca")))
            remove(hashSetOf("Alice", "Bob", "Luca"))
            assertEquals(
                "",
                this.toString()
            )
        }

        parseAccessStructure("(Bob and Luca) or Alice").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Luca")))
            remove(hashSetOf("Luca"))
            assertEquals(
                "Bob or Alice",
                this.toString()
            )
        }

        parseAccessStructure("(Bob and Luca) or Alice").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Bob")))
            remove(hashSetOf("Bob"))
            assertEquals(
                "Luca or Alice",
                this.toString()
            )
        }

        parseAccessStructure("(Bob and Luca) or Alice").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Alice")))
            remove(hashSetOf("Alice"))
            assertEquals(
                "Bob and Luca",
                this.toString()
            )
        }

        parseAccessStructure("(Bob and Luca) or Alice").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Alice", "Bob", "Luca")))
            remove(hashSetOf("Alice", "Bob", "Luca"))
            assertEquals(
                "",
                this.toString()
            )
        }

        parseAccessStructure("(Alice or Bob) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Alice")))
            remove(hashSetOf("Alice"))
            assertEquals(
                "Bob and (Carl or Denise)",
                this.toString()
            )
        }

        parseAccessStructure("(Alice or Bob) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Bob")))
            remove(hashSetOf("Bob"))
            assertEquals(
                "Alice and (Carl or Denise)",
                this.toString()
            )
        }

        parseAccessStructure("(Alice or Bob) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Carl")))
            remove(hashSetOf("Carl"))
            assertEquals(
                "(Alice or Bob) and Denise",
                this.toString()
            )
        }

        parseAccessStructure("(Alice or Bob) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Denise")))
            remove(hashSetOf("Denise"))
            assertEquals(
                "(Alice or Bob) and Carl",
                this.toString()
            )
        }

        parseAccessStructure("(Alice or Bob) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Carl", "Denise")))
            remove(hashSetOf("Carl", "Denise"))
            assertEquals(
                "Alice or Bob",
                this.toString()
            )
        }

        parseAccessStructure("(Alice or Bob) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Alice", "Denise")))
            remove(hashSetOf("Alice", "Denise"))
            assertEquals(
                "Bob and Carl",
                this.toString()
            )
        }

        parseAccessStructure("(Alice or Bob) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Alice", "Bob", "Carl", "Denise")))
            remove(hashSetOf("Alice", "Bob", "Carl", "Denise"))
            assertEquals(
                "",
                this.toString()
            )
        }

        parseAccessStructure("((Alice or Bob) and Erica) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Alice", "Carl")))
            remove(hashSetOf("Alice", "Carl"))
            assertEquals(
                "(Bob and Erica) and Denise",
                this.toString()
            )
        }

        parseAccessStructure("((Alice or Bob) and Erica) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Bob", "Erica")))
            remove(hashSetOf("Bob", "Erica"))
            assertEquals(
                "Alice and (Carl or Denise)",
                this.toString()
            )
        }

        parseAccessStructure("((Alice or Bob) and Erica) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Carl", "Denise", "Alice", "Bob")))
            remove(hashSetOf("Carl", "Denise", "Alice", "Bob"))
            assertEquals(
                "Erica",
                this.toString()
            )
        }

        parseAccessStructure("((Alice or Bob) and Erica) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Carl", "Denise", "Alice", "Bob")))
            remove(hashSetOf("Erica", "Carl", "Denise", "Alice", "Bob"))
            assertEquals(
                "",
                this.toString()
            )
        }

        parseAccessStructure("(Erica and (Alice or Bob)) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Bob", "Carl")))
            remove(hashSetOf("Bob", "Carl"))
            assertEquals(
                "(Erica and Alice) and Denise",
                this.toString()
            )
        }

        parseAccessStructure("(Erica and (Alice or Bob)) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Erica")))
            remove(hashSetOf("Erica"))
            assertEquals(
                "(Alice or Bob) and (Carl or Denise)",
                this.toString()
            )
        }

        parseAccessStructure("(Erica and (Alice or Bob)) and (Carl or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Erica", "Alice", "Bob", "Carl", "Denise")))
            remove(hashSetOf("Erica", "Alice", "Bob", "Carl", "Denise"))
            assertEquals(
                "",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("From")))
            remove(hashSetOf("From"))
            assertEquals(
                "(Floor in (2, 5) or Date = March 1-15, 2015) and (Prize < 10 or Denise)",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Floor")))
            remove(hashSetOf("Floor"))
            assertEquals(
                "(From:Bob and Date = March 1-15, 2015) and (Prize < 10 or Denise)",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Date")))
            remove(hashSetOf("Date"))
            assertEquals(
                "(From:Bob and Floor in (2, 5)) and (Prize < 10 or Denise)",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Prize")))
            remove(hashSetOf("Prize"))
            assertEquals(
                "(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and Denise",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Denise")))
            remove(hashSetOf("Denise"))
            assertEquals(
                "(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and Prize < 10",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("From", "Date")))
            remove(hashSetOf("From", "Date"))
            assertEquals(
                "Floor in (2, 5) and (Prize < 10 or Denise)",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("From", "Prize")))
            remove(hashSetOf("From", "Prize"))
            assertEquals(
                "(Floor in (2, 5) or Date = March 1-15, 2015) and Denise",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Floor", "Denise")))
            remove(hashSetOf("Floor", "Denise"))
            assertEquals(
                "(From:Bob and Date = March 1-15, 2015) and Prize < 10",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("From", "Floor", "Date", "Prize")))
            remove(hashSetOf("From", "Floor", "Date", "Prize"))
            assertEquals(
                "Denise",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("From", "Floor", "Date", "Denise")))
            remove(hashSetOf("From", "Floor", "Date", "Denise"))
            assertEquals(
                "Prize < 10",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("From", "Floor", "Prize", "Denise")))
            remove(hashSetOf("From", "Floor", "Prize", "Denise"))
            assertEquals(
                "Date = March 1-15, 2015",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("From", "Date", "Prize", "Denise")))
            remove(hashSetOf("From", "Date", "Prize", "Denise"))
            assertEquals(
                "Floor in (2, 5)",
                this.toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(containsAtLeastOne(hashSetOf("Floor", "Date", "Prize", "Denise")))
            remove(hashSetOf("Floor", "Date", "Prize", "Denise"))
            assertEquals(
                "From:Bob",
                this.toString()
            )
        }
    }

    @Test
    fun get_attributes_works() {
        parseAccessStructure("Bob or Luca").apply {
            assertEquals(
                hashSetOf("Bob", "Luca"),
                getAttributes()
            )
        }

        parseAccessStructure("Alice and (Bob or Luca)").apply {
            assertEquals(
                hashSetOf("Bob", "Luca", "Alice"),
                getAttributes()
            )
        }
        
        parseAccessStructure("(Bob and Luca) or Alice").apply {
            assertEquals(
                hashSetOf("Bob", "Luca", "Alice"),
                getAttributes()
            )
        }
        
        parseAccessStructure("(Alice or Bob) and (Carl or Denise)").apply {
            assertEquals(
                hashSetOf("Bob", "Carl", "Alice", "Denise"),
                getAttributes()
            )
        }

        parseAccessStructure("((Alice or Bob) and Erica) and (Carl or Denise)").apply {
            assertEquals(
                hashSetOf("Bob", "Carl", "Alice", "Denise", "Erica"),
                getAttributes()
            )
        }

        parseAccessStructure("(Erica and (Alice or Bob)) and (Carl or Denise)").apply {
            assertEquals(
                hashSetOf("Bob", "Carl", "Alice", "Denise", "Erica"),
                getAttributes()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertEquals(
                hashSetOf("From", "Floor", "Date", "Prize", "Denise"),
                getAttributes()
            )
        }
    }

    @Test
    fun replace_attribute_name_works() {
        parseAccessStructure("Bob or Luca").apply {
            assertTrue(replaceAttribute("Bob", "Bob_1"))
            assertEquals(
                "Bob_1 or Luca",
                toString()
            )
        }

        parseAccessStructure("Alice and (Bob or Luca)").apply {
            assertTrue(replaceAttribute("Alice", "Alice_1"))
            assertEquals(
                "Alice_1 and (Bob or Luca)",
                toString()
            )
        }

        parseAccessStructure("(Alice or Bob) and (Carl or Denise)").apply {
            assertTrue(replaceAttribute("Alice", "Alice_1"))
            assertTrue(replaceAttribute("Denise", "Denise_2"))
            assertEquals(
                "(Alice_1 or Bob) and (Carl or Denise_2)",
                toString()
            )
        }

        parseAccessStructure("((Alice or Bob) and Erica) and (Carl or Denise)").apply {
            assertTrue(replaceAttribute("Alice", "Alice_1"))
            assertTrue(replaceAttribute("Denise", "Denise_2"))
            assertTrue(replaceAttribute("Erica", "Erica_3"))
            assertFalse(replaceAttribute("Alice", "Alice_2"))
            assertEquals(
                "((Alice_1 or Bob) and Erica_3) and (Carl or Denise_2)",
                toString()
            )
        }

        parseAccessStructure("(Erica and (Alice or Bob)) and (Carl or Denise)").apply {
            assertTrue(replaceAttribute("Alice", "Alice_1"))
            assertTrue(replaceAttribute("Alice_1", "Alice_2"))
            assertTrue(replaceAttribute("Denise", "Denise_2"))
            assertTrue(replaceAttribute("Erica", "Erica_3"))
            assertFalse(replaceAttribute("Alice", "Alice_2"))
            assertEquals(
                "(Erica_3 and (Alice_2 or Bob)) and (Carl or Denise_2)",
                toString()
            )
        }

        parseAccessStructure("(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)").apply {
            assertTrue(replaceAttribute("From", "From_1"))
            assertFalse(replaceAttribute("Bob", "Bob_1"))
            assertTrue(replaceAttribute("Floor", "Floor_2"))
            assertTrue(replaceAttribute("Date", "Date_3"))
            assertTrue(replaceAttribute("Prize", "Prize_2"))
            assertTrue(replaceAttribute("Denise", "Denise_1"))
            assertEquals(
                "(From_1:Bob and (Floor_2 in (2, 5) or Date_3 = March 1-15, 2015)) and (Prize_2 < 10 or Denise_1)",
                toString()
            )
        }
    }
}

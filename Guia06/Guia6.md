# Guía 6 - Aplicación móvil "Descubre El Salvador"

**Versión 2.0 **
**Autor: Karens Medrano**

---

# Instalación de dependencias

Antes de iniciar el desarrollo de la aplicación, es necesario instalar las dependencias que serán utilizadas durante la práctica.

## Redux Native Safe Area Context

react-native-safe-area-context es una librería que permite que el contenido de la aplicación se adapte automáticamente a las áreas seguras de la pantalla (Safe Area). De esta manera, evita que elementos importantes de la interfaz, como botones, textos o encabezados, queden ocultos por componentes físicos del dispositivo (como el notch o la cámara frontal) o por elementos del sistema operativo, como la barra de estado y la barra de navegación.
Ejecute el siguiente comando en la terminal:

```bash
npx expo install react-native-safe-area-context
```

---

# Índice
## Tipos
1. [Destination.ts](#destinationts)
2. [Food.ts](#foodts)
3. [Route.ts](#routets)
## Datos
4. [Destinations.ts](#destinationsts)
5. [Foods.ts](#foodsts)
6. [Routes.ts](#routests)
## Componentes
7. [DestinationCard.tsx](#destinationcardtsx)
8. [FoodCard.tsx](#foodcardtsx)
9. [Header.tsx](#headertsx)
10. [RouteCard.tsx](#routecardtsx)
11. [SearchBar.tsx](#searchbartsx)
## Principal
12. [App.tsx](#apptsx)

---

# Destination.ts

Ruta:

```text
src/types/Destination.ts
```

```ts
export interface Destination {
  id: string;
  title: string;
  location: string;
  image: any;
}
```
[⬆️ Volver al índice](#índice)

---

# Food.ts

Ruta:

```text
src/types/Food.ts
```

```ts
export interface Food {
  id: string;
  title: string;
  image: any;
}
```
[⬆️ Volver al índice](#índice)

---

# Route.ts

Ruta:

```text
src/types/Route.ts
```

```ts
export interface Route {
  id: string;
  name: string;
  description: string;
  image: any;
}
```
[⬆️ Volver al índice](#índice)

---

# Destinations.ts

Ruta:

```text
src/data/Destinations.ts
```

```ts
import { Destination } from "../types/Destination";

export const destinations: Destination[] = [
  {
    id: '1',
    title: 'Surf en El Tunco',
    location: 'La Libertad',
    image: require('../assets/img/actividad1.jpg')
  },
  {
    id: '2',
    title: 'Escalada a Volcán de Santa Ana',
    location: 'Santa Ana',
    image: require('../assets/img/actividad2.jpg')
  },
  {
    id: '3',
    title: 'Camping de Montaña',
    location: 'Chalatenango',
    image: require('../assets/img/actividad3.jpg')
  },
  {
    id: '4',
    title: 'Recorrido por el Centro Histórico',
    location: 'San Salvador',
    image: require('../assets/img/actividad4.jpg')
  },
  {
    id: '5',
    title: 'Recorrido por Pueblos',
    location: 'Artesanal',
    image: require('../assets/img/actividad5.jpg')
  },
];
```
[⬆️ Volver al índice](#índice)

---

# Foods.ts

Ruta:

```text
src/data/Foods.ts
```

```ts
import { Food } from '../types/Food';

export const foods: Food[] = [
  {
    id: '1',
    title: 'Pupusas',
    image: require('../assets/img/mejores1.jpg'),
  },
  {
    id: '2',
    title: 'Yuca Frita',
    image: require('../assets/img/mejores2.jpg'),
  },
  {
    id: '3',
    title: 'Atol de Elote',
    image: require('../assets/img/mejores3.jpg'),
  },
];
```
[⬆️ Volver al índice](#índice)

---

# Routes.ts

Ruta:

```text
src/data/Routes.ts
```

```ts
import { Route } from '../types/Route';

export const routes: Route[] = [
  {
    id: '1',
    name: 'Ruta de Las Flores',
    description:
      'Recorrido por pueblos pintorescos, cafetales, artesanías y gastronomía típica.',
    image: require('../assets/img/ruta1.jpg'),
  },
  {
    id: '2',
    name: 'Ruta Arqueológica',
    description:
      'Explora sitios históricos y vestigios de antiguas civilizaciones prehispánicas.',
    image: require('../assets/img/ruta2.jpg'),
  },
  {
    id: '3',
    name: 'Ruta Complejo de los Volcanes',
    description:
      'Aventura entre volcanes, senderos naturales y miradores espectaculares.',
    image: require('../assets/img/ruta3.jpg'),
  },
  {
    id: '4',
    name: 'Ruta Sol y Playa',
    description:
      'Disfruta de playas, surf, paisajes costeros y actividades al aire libre.',
    image: require('../assets/img/ruta4.jpg'),
  },
];
```
[⬆️ Volver al índice](#índice)

---

# DestinationCard.tsx

Ruta:

```text
src/components/DestinationCard.tsx
```

```tsx
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Alert,
  Dimensions,
} from "react-native";
import { Destination } from "../types/Destination";

interface Props {
  destination: Destination;
}

const { width } = Dimensions.get("window");

const CARD_WIDTH = (width - 48) / 2;

export function DestinationCard({ destination }: Props) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        Alert.alert(destination.title, `Ubicación: ${destination.location}`);
      }}
    >
      <Image source={destination.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{destination.title}</Text>

        <Text style={styles.location}>📍 {destination.location}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 4,
  },

  image: {
    width: "100%",
    height: 120,
  },

  content: {
    padding: 12,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
  },

  location: {
    marginTop: 4,
    fontSize: 13,
    color: "#6B7280",
  },
});
```
[⬆️ Volver al índice](#índice)

---

# FoodCard.tsx

Ruta:

```text
src/components/FoodCard.tsx
```

```tsx
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { Food } from '../types/Food';

interface Props {
  food: Food;
}

export function FoodCard({ food }: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={food.image}
        style={styles.image}
      />

      <Text style={styles.title}>
        {food.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 15,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 16,
  },

  title: {
    marginTop: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
});
```
[⬆️ Volver al índice](#índice)

---

# Header.tsx

Ruta:

```text
src/components/Header.tsx
```

```tsx
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
} from 'react-native';

interface Props {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: Props) {
  return (
    <ImageBackground
      source={require('../assets/img/bg.jpg')}
      style={styles.hero}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 250,
    justifyContent: 'flex-end',
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 20,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
  },
});
```


[⬆️ Volver al índice](#índice)

---

# RouteCard.tsx

Ruta:

```text
src/components/RouteCard.tsx
```

```tsx
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import { Route } from '../types/Route';

interface Props {
  route: Route;
}

export function RouteCard({ route }: Props) {
  return (
    <ImageBackground
      source={route.image}
      style={styles.card}
      imageStyle={styles.image}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>
          {route.name}
        </Text>

        <Text style={styles.description}>
          {route.description}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    marginHorizontal: 15,
    marginBottom: 15,
    justifyContent: 'flex-end',
  },

  image: {
    borderRadius: 16,
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.55)',
    padding: 15,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  description: {
    color: '#F3F4F6',
    fontSize: 14,
    lineHeight: 20,
  },
});
```

[⬆️ Volver al índice](#índice)

---

# SearchBar.tsx

Ruta:

```text
src/components/SearchBar.tsx
```

```tsx
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="🔍 Buscar destino..."
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: '#E5E7EB',

    fontSize: 16,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },
});
```
[⬆️ Volver al índice](#índice)

---

# App.tsx

Ruta:

```text
App.tsx
```

```tsx
import {
  FlatList,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { destinations } from "./src/data/Destinations";
import { foods } from "./src/data/Foods";
import { routes } from "./src/data/Routes";

import { DestinationCard } from "./src/components/DestinationCard";
import { FoodCard } from "./src/components/FoodCard";
import { RouteCard } from "./src/components/RouteCard";
import { SearchBar } from "./src/components/SearchBar";
import { Header } from "./src/components/Header";

export default function App() {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinations.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <Header
          title="Descubre El Salvador"
          subtitle="Explora lugares increíbles"
        />

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <Text style={styles.sectionTitle}>
          Destinos Destacados
        </Text>

        <FlatList
          data={filteredDestinations}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 12,
          }}
          renderItem={({ item }) => (
            <DestinationCard destination={item} />
          )}
        />

        <Text style={styles.sectionTitle}>
          Gastronomía Salvadoreña
        </Text>

        <FlatList
          horizontal
          data={foods}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          renderItem={({ item }) => (
            <FoodCard food={item} />
          )}
        />

        <Text style={styles.sectionTitle}>
          Rutas Turísticas
        </Text>

        {routes.map((route) => (
          <RouteCard
            key={route.id}
            route={route}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F9FA",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginHorizontal: 15,
    marginBottom: 15,
  },
});
```
[⬆️ Volver al índice](#índice)
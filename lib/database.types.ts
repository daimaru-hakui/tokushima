export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      delivery_places: {
        Row: {
          address: string | null
          created_at: string | null
          id: string
          kana: string | null
          name: string
          tel: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          id?: string
          kana?: string | null
          name: string
          tel?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          id?: string
          kana?: string | null
          name?: string
          tel?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      factories: {
        Row: {
          address: string | null
          created_at: string | null
          id: string
          kana: string | null
          name: string
          tel: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          id?: string
          kana?: string | null
          name?: string
          tel?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          id?: string
          kana?: string | null
          name?: string
          tel?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          id: string
          isAdmin: boolean
          isDelivery: boolean
          isSales: boolean
          isTokushima: boolean
          updated_at: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          id: string
          isAdmin?: boolean
          isDelivery?: boolean
          isSales?: boolean
          isTokushima?: boolean
          updated_at?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          isAdmin?: boolean
          isDelivery?: boolean
          isSales?: boolean
          isTokushima?: boolean
          updated_at?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      repair_categories: {
        Row: {
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      repair_contents: {
        Row: {
          color: string | null
          comment: string | null
          created_at: string | null
          id: string
          image_path: string | null
          images: string[]
          is_new: boolean | null
          position: string | null
          price: number | null
          repair_id: number | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string
          image_path?: string | null
          images: string[]
          is_new?: boolean | null
          position?: string | null
          price?: number | null
          repair_id?: number | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string
          image_path?: string | null
          images?: string[]
          is_new?: boolean | null
          position?: string | null
          price?: number | null
          repair_id?: number | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "repair_contents_repair_id_fkey"
            columns: ["repair_id"]
            referencedRelation: "repairs"
            referencedColumns: ["id"]
          }
        ]
      }
      repair_details: {
        Row: {
          comment: string | null
          created_at: string | null
          id: string
          maker: string | null
          product_name: string | null
          quantity: number | null
          repair_id: number
          size: string | null
          updated_at: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: string
          maker?: string | null
          product_name?: string | null
          quantity?: number | null
          repair_id: number
          size?: string | null
          updated_at?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: string
          maker?: string | null
          product_name?: string | null
          quantity?: number | null
          repair_id?: number
          size?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "repair_details_repair_id_fkey"
            columns: ["repair_id"]
            referencedRelation: "repairs"
            referencedColumns: ["id"]
          }
        ]
      }
      repair_templates: {
        Row: {
          category_id: string
          color: string
          comment: string
          created_at: string
          customer: string
          factory_id: string
          id: string
          image_path: string | null
          images: string[] | null
          position: string
          price: number
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          category_id: string
          color?: string
          comment?: string
          created_at?: string
          customer?: string
          factory_id: string
          id?: string
          image_path?: string | null
          images?: string[] | null
          position?: string
          price?: number
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          category_id?: string
          color?: string
          comment?: string
          created_at?: string
          customer?: string
          factory_id?: string
          id?: string
          image_path?: string | null
          images?: string[] | null
          position?: string
          price?: number
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "repair_templates_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "repair_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "repair_templates_factory_id_fkey"
            columns: ["factory_id"]
            referencedRelation: "factories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "repair_templates_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      repairs: {
        Row: {
          comment: string | null
          created_at: string
          customer: string | null
          deadline: string | null
          delivery_place_id: string
          factory_id: string
          id: number
          product_id: string | null
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          customer?: string | null
          deadline?: string | null
          delivery_place_id: string
          factory_id: string
          id?: number
          product_id?: string | null
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          customer?: string | null
          deadline?: string | null
          delivery_place_id?: string
          factory_id?: string
          id?: number
          product_id?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "repairs_delivery_place_id_fkey"
            columns: ["delivery_place_id"]
            referencedRelation: "delivery_places"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "repairs_factory_id_fkey"
            columns: ["factory_id"]
            referencedRelation: "factories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "repairs_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_factories: {
        Args: Record<PropertyKey, never>
        Returns: {
          address: string | null
          created_at: string | null
          id: string
          kana: string | null
          name: string
          tel: string | null
          updated_at: string | null
        }[]
      }
      hello_world: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
